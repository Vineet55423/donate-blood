// import { useState } from "react";
// // Keep your existing imports at the top exactly as they are in your screenshot!
// import { SidebarProvider } from "../components/ui/sidebar"; // Assuming this is the path
// import { ChartsSection } from "../components/ui/ChartsSection";
// import { AnalyticsCards } from "../components/ui/AnalyticsCards";
// import { DonorTable } from "../components/ui/DonorTable.tsx";

// export default function AdminDashboard() {
//   // 1. Create a "signal" state
//   const [refreshTrigger, setRefreshTrigger] = useState(0);

//   const refreshData = () => {
//     // 2. Every time a donor is deleted, change this number
//     setRefreshTrigger((prev) => prev + 1);
//     console.log("Signal sent to refresh cards and charts!");
//   };

//   return (
//     <SidebarProvider>
//       <div className="w-4/5 max-w-none px-6 py-6 mx-auto">
//         <div className="w-full px-6 py-6">
//           {/* 3. Pass the signal to your components so they know when to update */}
//           <AnalyticsCards refreshTrigger={refreshTrigger} />
//           <ChartsSection refreshTrigger={refreshTrigger} />
          
//           <DonorTable onDonorDeleted={refreshData} />
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }

import { SidebarProvider } from "../components/ui/sidebar";
import { ChartsSection } from "../components/ui/ChartsSection";
import { DonorTable } from "../components/ui/DonorTable";
import { AnalyticsCards } from "../components/ui/AnalyticsCards";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; // Add this import

export default function AdminDashboard() {

 const [refreshTrigger, setRefreshTrigger] = useState(0);

  const refreshData = () => {
    // 2. Every time a donor is deleted, change this number
    setRefreshTrigger((prev) => prev + 1);
    console.log("Signal sent to refresh cards and charts!");
  };

  const [donors, setDonors] = useState<any[]>([]);
  const navigate = useNavigate(); // Initialize navigation

  // --- NEW: Authentication Check ---
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      // If they don't have the auth token, kick them back to login
      navigate("/admin-login"); 
    }
  }, [navigate]);

  // --- NEW: Logout Function ---
  const handleLogout = () => {
    localStorage.removeItem("adminAuth"); // Clear the token
    navigate("/admin-login"); // Send back to login screen
  };

  const loadDonors = async () => {
    const { data, error } = await supabase.from("donors").select("*");
    if (!error && data) setDonors(data);
  };

  useEffect(() => {
    loadDonors();
    const channel = supabase
      .channel("donors-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "donors" },
        (payload) => {
          console.log("DB changed", payload);
          loadDonors();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="w-4/5 max-w-none px-6 py-16 mx-auto">
        
        {/* // Added a header area for the Logout button */}
        <div className="flex justify-end w-full px-6 mb-4">
           <button 
             onClick={handleLogout}
             className="px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-black transition-colors"
           >
             Logout
           </button>
        </div>
         <div className="w-full px-6 py-6">
          {/* 3. Pass the signal to your components so they know when to update */}
          <AnalyticsCards refreshTrigger={refreshTrigger} />
          <ChartsSection refreshTrigger={refreshTrigger} />
          
          <DonorTable onDonorDeleted={refreshData} />
        </div>

        {/* <div className="w-full px-6 py-6 mt-0">
          <AnalyticsCards donors={donors}/>
          <div className="mt-8">
            <ChartsSection donors={donors} />
          </div>
          <div className="mt-8">
            <DonorTable donors={donors} />
          </div>
        </div> */}
      </div>
    </SidebarProvider>
  );
}

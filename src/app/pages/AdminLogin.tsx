import { useState } from "react";
import { useNavigate } from "react-router"; // Or "react-router-dom" depending on your setup
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Check credentials against the Supabase 'admins' table
    const { data, error: dbError } = await supabase
      .from("admins")
      .select("*")
      .eq("username", username)
      .eq("password", password)
      .single(); // We use .single() because we only expect one match

    if (dbError || !data) {
      setError("Invalid username or password");
      setIsLoading(false);
    } else {
      // Success! Save a simple flag in localStorage to remember they are logged in
      localStorage.setItem("adminAuth", "true");
      navigate("/admin"); // Redirect to the actual dashboard
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-500">Please sign in to access the dashboard</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-200 rounded-md outline-none focus:border-red-500"
              placeholder="Enter admin username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-200 rounded-md outline-none focus:border-red-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors disabled:bg-red-400"
          >
            {isLoading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
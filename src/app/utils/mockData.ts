export interface Donor {
  id: string;
  name: string;
  bloodGroup: string;
  age: number;
  gender: string;
  city: string;
  state: string;
  phone: string;
  lastDonation: string;
  availableForEmergency: boolean;
  distance?: number;
  latitude: number;
  longitude: number;
}

export interface BloodCentre {
  id: string;
  name: string;
  type: "hospital" | "blood_bank";
  address: string;
  city: string;
  phone: string;
  workingHours: string;
  latitude: number;
  longitude: number;
  distance?: number;
}

export const mockDonors: Donor[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    bloodGroup: "O+",
    age: 32,
    gender: "Male",
    city: "Mumbai",
    state: "Maharashtra",
    phone: "+91 98765 43210",
    lastDonation: "2025-12-15",
    availableForEmergency: true,
    latitude: 19.0760,
    longitude: 72.8777,
  },
  {
    id: "2",
    name: "Priya Sharma",
    bloodGroup: "A+",
    age: 28,
    gender: "Female",
    city: "Delhi",
    state: "Delhi",
    phone: "+91 98765 43211",
    lastDonation: "2025-10-20",
    availableForEmergency: true,
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    id: "3",
    name: "Amit Patel",
    bloodGroup: "B+",
    age: 35,
    gender: "Male",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 98765 43212",
    lastDonation: "2026-01-10",
    availableForEmergency: false,
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    bloodGroup: "AB+",
    age: 26,
    gender: "Female",
    city: "Hyderabad",
    state: "Telangana",
    phone: "+91 98765 43213",
    lastDonation: "2025-11-05",
    availableForEmergency: true,
    latitude: 17.3850,
    longitude: 78.4867,
  },
  {
    id: "5",
    name: "Vikram Singh",
    bloodGroup: "O-",
    age: 40,
    gender: "Male",
    city: "Pune",
    state: "Maharashtra",
    phone: "+91 98765 43214",
    lastDonation: "2025-12-01",
    availableForEmergency: true,
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    id: "6",
    name: "Ananya Iyer",
    bloodGroup: "A-",
    age: 29,
    gender: "Female",
    city: "Chennai",
    state: "Tamil Nadu",
    phone: "+91 98765 43215",
    lastDonation: "2025-09-15",
    availableForEmergency: true,
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    id: "7",
    name: "Rahul Verma",
    bloodGroup: "B-",
    age: 33,
    gender: "Male",
    city: "Kolkata",
    state: "West Bengal",
    phone: "+91 98765 43216",
    lastDonation: "2026-02-01",
    availableForEmergency: false,
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    id: "8",
    name: "Kavya Nair",
    bloodGroup: "AB-",
    age: 31,
    gender: "Female",
    city: "Kochi",
    state: "Kerala",
    phone: "+91 98765 43217",
    lastDonation: "2025-10-10",
    availableForEmergency: true,
    latitude: 9.9312,
    longitude: 76.2673,
  },
];

export const mockBloodCentres: BloodCentre[] = [
  {
    id: "1",
    name: "City General Hospital Blood Bank",
    type: "hospital",
    address: "123 MG Road, Mumbai, Maharashtra 400001",
    city: "Mumbai",
    phone: "+91 22 1234 5678",
    workingHours: "24/7",
    latitude: 19.0760,
    longitude: 72.8777,
  },
  {
    id: "2",
    name: "Red Cross Blood Centre",
    type: "blood_bank",
    address: "456 Station Road, Delhi 110001",
    city: "Delhi",
    phone: "+91 11 2345 6789",
    workingHours: "9 AM - 6 PM",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  {
    id: "3",
    name: "Apollo Hospital Blood Bank",
    type: "hospital",
    address: "789 Residency Road, Bangalore, Karnataka 560025",
    city: "Bangalore",
    phone: "+91 80 3456 7890",
    workingHours: "24/7",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    id: "4",
    name: "Lifeblood Donation Centre",
    type: "blood_bank",
    address: "321 Park Street, Hyderabad, Telangana 500001",
    city: "Hyderabad",
    phone: "+91 40 4567 8901",
    workingHours: "8 AM - 8 PM",
    latitude: 17.3850,
    longitude: 78.4867,
  },
  {
    id: "5",
    name: "Ruby Hall Clinic Blood Bank",
    type: "hospital",
    address: "654 FC Road, Pune, Maharashtra 411004",
    city: "Pune",
    phone: "+91 20 5678 9012",
    workingHours: "24/7",
    latitude: 18.5204,
    longitude: 73.8567,
  },
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodCompatibility = {
  "A+": { canDonateTo: ["A+", "AB+"], canReceiveFrom: ["A+", "A-", "O+", "O-"] },
  "A-": { canDonateTo: ["A+", "A-", "AB+", "AB-"], canReceiveFrom: ["A-", "O-"] },
  "B+": { canDonateTo: ["B+", "AB+"], canReceiveFrom: ["B+", "B-", "O+", "O-"] },
  "B-": { canDonateTo: ["B+", "B-", "AB+", "AB-"], canReceiveFrom: ["B-", "O-"] },
  "AB+": { canDonateTo: ["AB+"], canReceiveFrom: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
  "AB-": { canDonateTo: ["AB+", "AB-"], canReceiveFrom: ["A-", "B-", "AB-", "O-"] },
  "O+": { canDonateTo: ["A+", "B+", "AB+", "O+"], canReceiveFrom: ["O+", "O-"] },
  "O-": { canDonateTo: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], canReceiveFrom: ["O-"] },
};

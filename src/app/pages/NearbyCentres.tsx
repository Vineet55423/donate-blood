import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Building2,
  Loader2,
} from "lucide-react";
import { mockBloodCentres, BloodCentre } from "../utils/mockData";

export default function NearbyCentres() {
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [centres, setCentres] = useState<BloodCentre[]>(mockBloodCentres);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getUserLocation = () => {
    setLoading(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });

        // Calculate distances and sort centres
        const centresWithDistance = mockBloodCentres
          .map((centre) => ({
            ...centre,
            distance: calculateDistance(
              latitude,
              longitude,
              centre.latitude,
              centre.longitude
            ),
          }))
          .sort((a, b) => (a.distance || 0) - (b.distance || 0));

        setCentres(centresWithDistance);
        setLoading(false);
      },
      (err) => {
        setError("Unable to get your location. Showing all centres.");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Building2 className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Nearby Blood Donation Centres
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Locate blood banks and hospitals near you
          </p>
        </motion.div>

        {/* Location Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  {userLocation
                    ? "Location detected"
                    : "Enable location to find nearby centres"}
                </h3>
                <p className="text-sm text-gray-600">
                  {userLocation
                    ? `Lat: ${userLocation.latitude.toFixed(4)}, Long: ${userLocation.longitude.toFixed(4)}`
                    : "We'll show centres closest to you"}
                </p>
              </div>
            </div>
            <button
              onClick={getUserLocation}
              disabled={loading}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Getting Location...
                </>
              ) : (
                <>
                  <Navigation className="w-5 h-5" />
                  Get My Location
                </>
              )}
            </button>
          </div>
          {error && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
              {error}
            </div>
          )}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-br from-red-100 to-red-200 h-96 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDExMywgMTMzLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
            <div className="text-center z-10">
              <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">
                Interactive map showing donation centres
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {userLocation
                  ? "Centres sorted by distance from your location"
                  : "Enable location to see centres on map"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Centres List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {userLocation ? "Nearby Centres" : "All Centres"}
            <span className="text-gray-500 font-normal text-lg ml-2">
              ({centres.length} found)
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre, index) => (
              <motion.div
                key={centre.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {centre.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        centre.type === "hospital"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {centre.type === "hospital" ? "Hospital" : "Blood Bank"}
                    </span>
                  </div>
                  {centre.distance && (
                    <div className="text-right">
                      <div className="text-sm font-semibold text-red-600">
                        {centre.distance.toFixed(1)} km
                      </div>
                      <div className="text-xs text-gray-500">away</div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>{centre.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a
                      href={`tel:${centre.phone}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {centre.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{centre.workingHours}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${centre.latitude},${centre.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm text-center flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:${centre.phone}`}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

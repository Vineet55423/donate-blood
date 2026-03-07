import { useState } from "react";
import { motion } from "motion/react";
import { Droplet, ArrowRight, Info } from "lucide-react";
import { bloodGroups, bloodCompatibility } from "../utils/mockData";

export default function BloodCompatibility() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>("");

  const compatibility = selectedBloodGroup
    ? bloodCompatibility[selectedBloodGroup as keyof typeof bloodCompatibility]
    : null;

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Droplet className="w-16 h-16 text-red-600 mx-auto mb-4 fill-current" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blood Type Compatibility
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understand blood donation and receiving compatibility
          </p>
        </motion.div>

        {/* Blood Group Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <label className="block text-lg font-semibold text-gray-900 mb-4 text-center">
            Select Your Blood Group
          </label>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-3xl mx-auto">
            {bloodGroups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedBloodGroup(group)}
                className={`py-3 px-4 rounded-lg font-bold text-lg transition-all ${
                  selectedBloodGroup === group
                    ? "bg-red-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compatibility Results */}
        {compatibility && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 mb-12"
          >
            {/* Can Donate To */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Can Donate To
                  </h2>
                  <p className="text-gray-600">
                    {selectedBloodGroup} can donate blood to these groups
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {compatibility.canDonateTo.map((group) => (
                  <div
                    key={group}
                    className="px-6 py-3 bg-green-100 text-green-800 rounded-lg font-bold text-lg"
                  >
                    {group}
                  </div>
                ))}
              </div>
            </div>

            {/* Can Receive From */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-blue-600 rotate-180" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Can Receive From
                  </h2>
                  <p className="text-gray-600">
                    {selectedBloodGroup} can receive blood from these groups
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {compatibility.canReceiveFrom.map((group) => (
                  <div
                    key={group}
                    className="px-6 py-3 bg-blue-100 text-blue-800 rounded-lg font-bold text-lg"
                  >
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Full Compatibility Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Complete Compatibility Chart
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Blood Type
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Can Donate To
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Can Receive From
                  </th>
                </tr>
              </thead>
              <tbody>
                {bloodGroups.map((group, index) => {
                  const compat =
                    bloodCompatibility[group as keyof typeof bloodCompatibility];
                  return (
                    <tr
                      key={group}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-red-50 transition-colors`}
                    >
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="font-bold text-red-600 text-lg">
                          {group}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {compat.canDonateTo.map((g) => (
                            <span
                              key={g}
                              className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {compat.canReceiveFrom.map((g) => (
                            <span
                              key={g}
                              className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg"
        >
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">
                Important Information
              </h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>
                  • <strong>O-</strong> is the universal donor - can donate to all
                  blood types
                </li>
                <li>
                  • <strong>AB+</strong> is the universal receiver - can receive from
                  all blood types
                </li>
                <li>
                  • Rh-negative blood types can donate to both Rh-positive and
                  Rh-negative
                </li>
                <li>
                  • Rh-positive blood types can only donate to Rh-positive recipients
                </li>
                <li>
                  • Always consult medical professionals for blood transfusion
                  decisions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router";
import { CheckCircle, XCircle, Calendar, Home } from "lucide-react";

interface RegistrationData {
  fullName: string;
  gender: string;
  age: string;
  weight: string;
  bloodGroup: string;
  userType: "donor" | "beneficiary";
  hasTattoo?: string;
  lastDonationDate?: string;
}

export default function EligibilityCheck() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state as RegistrationData;

  if (!data) {
    navigate("/auth");
    return null;
  }

  // Only check eligibility for donors
  if (data.userType === "beneficiary") {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to FindBlood, {data.fullName}! You have been registered as a
              beneficiary.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Eligibility Checks for Donors
  const age = parseInt(data.age);
  const weight = parseInt(data.weight);

  const checks = {
    age: {
      label: "Age between 18-65 years",
      passed: age >= 18 && age <= 65,
      value: `${age} years`,
    },
    weight: {
      label: "Weight at least 50 kg",
      passed: weight >= 50,
      value: `${weight} kg`,
    },
    tattoo: {
      label: "No tattoo in last 12 months",
      passed: data.hasTattoo === "no",
      value: data.hasTattoo === "yes" ? "Has tattoo" : "No tattoo",
    },
    donationGap: {
      label: `Minimum donation gap (${
        data.gender === "male" ? "90 days" : "120 days"
      })`,
      passed: true,
      value: "Not applicable",
    },
  };

  // Check donation gap if last donation date is provided
  if (data.lastDonationDate) {
    const lastDonation = new Date(data.lastDonationDate);
    const today = new Date();
    const daysSinceLastDonation = Math.floor(
      (today.getTime() - lastDonation.getTime()) / (1000 * 60 * 60 * 24)
    );
    const requiredGap = data.gender === "male" ? 90 : 120;

    checks.donationGap = {
      label: `Minimum donation gap (${requiredGap} days)`,
      passed: daysSinceLastDonation >= requiredGap,
      value: `${daysSinceLastDonation} days since last donation`,
    };
  }

  const allChecksPassed = Object.values(checks).every((check) => check.passed);

  // Calculate next eligible date if tattoo or donation gap fails
  let nextEligibleDate: Date | null = null;

  if (data.hasTattoo === "yes") {
    // Assume tattoo was recent, need to wait 1 year from today
    nextEligibleDate = new Date();
    nextEligibleDate.setFullYear(nextEligibleDate.getFullYear() + 1);
  } else if (data.lastDonationDate && !checks.donationGap.passed) {
    const lastDonation = new Date(data.lastDonationDate);
    const requiredGap = data.gender === "male" ? 90 : 120;
    nextEligibleDate = new Date(lastDonation);
    nextEligibleDate.setDate(nextEligibleDate.getDate() + requiredGap);
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div
              className={`w-20 h-20 ${
                allChecksPassed ? "bg-green-100" : "bg-red-100"
              } rounded-full flex items-center justify-center mx-auto mb-6`}
            >
              {allChecksPassed ? (
                <CheckCircle className="w-12 h-12 text-green-600" />
              ) : (
                <XCircle className="w-12 h-12 text-red-600" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Eligibility Check Results
            </h1>
            <p className="text-gray-600">
              Review your blood donation eligibility status
            </p>
          </div>

          {/* Status Card */}
          <div
            className={`bg-white rounded-xl shadow-md p-8 mb-6 border-2 ${
              allChecksPassed ? "border-green-500" : "border-red-500"
            }`}
          >
            <div className="text-center mb-6">
              <h2
                className={`text-2xl font-bold mb-2 ${
                  allChecksPassed ? "text-green-600" : "text-red-600"
                }`}
              >
                {allChecksPassed
                  ? "✓ You are Eligible to Donate Blood!"
                  : "✗ You are Not Currently Eligible"}
              </h2>
              <p className="text-gray-600">
                {allChecksPassed
                  ? "Congratulations! You meet all the criteria for blood donation."
                  : "Please review the criteria below. You can donate once you meet all requirements."}
              </p>
            </div>

            {!allChecksPassed && nextEligibleDate && (
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-blue-900">
                      Next Eligible Donation Date
                    </h3>
                    <p className="text-blue-800">
                      {nextEligibleDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Eligibility Criteria */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                Eligibility Criteria:
              </h3>
              {Object.entries(checks).map(([key, check]) => (
                <div
                  key={key}
                  className={`flex items-start gap-3 p-4 rounded-lg ${
                    check.passed ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  {check.passed ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        check.passed ? "text-green-900" : "text-red-900"
                      }`}
                    >
                      {check.label}
                    </p>
                    <p
                      className={`text-sm ${
                        check.passed ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {check.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donor Info Card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Your Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-medium text-gray-900">{data.fullName}</p>
              </div>
              <div>
                <p className="text-gray-600">Blood Group</p>
                <p className="font-medium text-red-600 text-lg">
                  {data.bloodGroup}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Age</p>
                <p className="font-medium text-gray-900">{data.age} years</p>
              </div>
              <div>
                <p className="text-gray-600">Gender</p>
                <p className="font-medium text-gray-900 capitalize">
                  {data.gender}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Weight</p>
                <p className="font-medium text-gray-900">{data.weight} kg</p>
              </div>
              {data.lastDonationDate && (
                <div>
                  <p className="text-gray-600">Last Donation</p>
                  <p className="font-medium text-gray-900">
                    {new Date(data.lastDonationDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </button>
            {allChecksPassed && (
              <button
                onClick={() => navigate("/nearby-centres")}
                className="flex-1 px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                Find Donation Centres
              </button>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <h4 className="font-semibold text-blue-900 mb-2">
              Important Information
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Stay hydrated before and after donation</li>
              <li>• Eat a healthy meal before donating</li>
              <li>• Bring a valid ID to the donation centre</li>
              <li>• Rest for at least 10-15 minutes after donation</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

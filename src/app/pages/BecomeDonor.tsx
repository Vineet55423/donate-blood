import { motion } from "motion/react";
import { Heart, CheckCircle, UserPlus, Calendar, Award } from "lucide-react";
import { Link } from "react-router";

export default function BecomeDonor() {
  const benefits = [
    {
      icon: Heart,
      title: "Save Lives",
      description: "One donation can save up to three lives",
    },
    {
      icon: Award,
      title: "Health Benefits",
      description: "Regular donation reduces risk of heart disease",
    },
    {
      icon: CheckCircle,
      title: "Free Health Check",
      description: "Get complimentary health screening",
    },
    {
      icon: Calendar,
      title: "Community Impact",
      description: "Be a hero in your local community",
    },
  ];

  const eligibilityCriteria = [
    "Age between 18 and 65 years",
    "Weight at least 50 kg (110 lbs)",
    "Hemoglobin level of 12.5 g/dL or higher",
    "No serious medical conditions",
    "Not pregnant or breastfeeding",
    "At least 90 days since last donation (males)",
    "At least 120 days since last donation (females)",
    "No tattoos or piercings in the last 12 months",
  ];

  const donationSteps = [
    {
      step: 1,
      title: "Register",
      description: "Sign up and complete your donor profile",
    },
    {
      step: 2,
      title: "Health Screening",
      description: "Get a quick health check and blood test",
    },
    {
      step: 3,
      title: "Donation",
      description: "The donation process takes about 10-15 minutes",
    },
    {
      step: 4,
      title: "Rest & Refresh",
      description: "Relax and enjoy refreshments after donation",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 fill-current" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Become a Blood Donor
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of heroes who regularly donate blood and save lives
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              Register as Donor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Donate Blood?
            </h2>
            <p className="text-gray-600">
              Discover the amazing benefits of being a blood donor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Eligibility Requirements
            </h2>
            <p className="text-gray-600">
              Check if you meet the criteria to become a donor
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Donation Process
            </h2>
            <p className="text-gray-600">
              Simple steps from registration to donation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < donationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
            <p className="text-xl text-red-100 mb-8">
              Register now and become a blood donation hero
            </p>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <UserPlus className="w-5 h-5" />
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blood Donation Facts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">10 min</div>
              <p className="text-gray-600">Average donation time</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">470ml</div>
              <p className="text-gray-600">Blood donated per session</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl font-bold text-red-600 mb-2">3 Lives</div>
              <p className="text-gray-600">Can be saved with one donation</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

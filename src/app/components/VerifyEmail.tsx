// components/VerifyEmail.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface VerifyEmailProps {
  email: string;
}

export default function VerifyEmail({ email }: VerifyEmailProps) {
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState("");

  const handleResend = async () => {
    setIsResending(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: `${window.location.origin}/signup`,
      },
    });

    if (error) {
      setMessage("Failed to resend link. Please try again.");
    } else {
      setMessage("A new magic link has been sent to your email!");
    }
    
    setIsResending(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-xl shadow-md p-8">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check your email
            </h2>
            <p className="text-gray-600 mb-2">
              We've sent a magic link to
            </p>
            <p className="font-medium text-gray-900">{email}</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
            <p className="text-sm text-blue-800">
              Click the link in the email to automatically verify your account. You will be redirected to the signup form.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Didn't receive the email?</p>
            <button
              onClick={handleResend}
              disabled={isResending}
              className="text-sm text-red-600 hover:text-red-700 font-medium disabled:opacity-50"
            >
              {isResending ? "Resending..." : "Click to resend magic link"}
            </button>
            {message && (
              <p className={`mt-3 text-sm ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
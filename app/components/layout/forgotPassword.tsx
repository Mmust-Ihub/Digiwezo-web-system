"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
if (email) {
      setMessage("A password reset link has been sent to your email!");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm p-6 rounded-lg">
        <h2 className="text-primary text-body leading-snug font-bold ">Forgot Password?</h2>
        <h3 className="text-primary text-body leading-relaxed mb-4 font-semibold  ">
          Enter your registered email to reset your password.
        </h3>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {message && (
            <div className="text-center text-sm text-green-600 font-medium">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-secondary text-foreground font-medium py-2 rounded-md hover:bg-secondary transition"
          >
            Send Reset Link
          </button>

          <div className="text-sm text-primary text-center mt-4">
            <Link href="/login" className="font-semibold">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}



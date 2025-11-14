
"use client";

import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { LoginPageProps } from "@/interfaces/interface";

export default function LoginPage({ onClose }: LoginPageProps) {
  const {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isLogin,
    setIsLogin,
  } = useAuth();
 return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden relative">
        
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>
<div className="bg-primary flex items-center justify-center p-4">
          <Image
            src="/Frame.png"
            alt="Frame"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
         <div className="bg-background p-6">
          <h2 className="text-primary font-semibold text-base mb-2">
            {isLogin ? "Log in" : "Reset Password"}
          </h2>
          <h3 className="text-primary text-sm mb-5">
            {isLogin
              ? "Welcome back! Please enter your details."
              : "Enter your email to receive a reset link."}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {isLogin && (
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            )}

            {isLogin && (
              <label className="flex items-center space-x-2 text-primary text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-primary"
                />
                <span>Remember me</span>
              </label>
            )}
             <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold hover:underline text-sm"
            >
              {isLogin ? "Forgot Password?" : "Back to Login"}
            </button>

            <button
              type="submit"
              className="w-full bg-secondary text-foreground font-medium py-2 rounded-md hover:bg-secondary/90 transition"
            >
              {isLogin ? "Login" : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

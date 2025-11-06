"use client";

import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
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
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
        
        <div className="bg-primary flex items-center justify-center p-6">
          <Image
            src="/Frame.png"
            alt="Frame"
            width={300}
            height={200}
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
          
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            
            {isLogin && (
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}

          
            <div className="flex items-center justify-between text-sm">
              {isLogin && (
                <label className="flex items-center space-x-2 text-primary">
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
                className="text-primary font-semibold hover:underline"
              >
                {isLogin ? "Forgot Password?" : "Back to Login"}
              </button>
            </div>

            
            <button
              type="submit"
              className="w-full bg-secondary text-foreground font-medium py-2 rounded-md hover:bg-secondary/90 transition"
            >
              { isLogin
                ? "Login"
                : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

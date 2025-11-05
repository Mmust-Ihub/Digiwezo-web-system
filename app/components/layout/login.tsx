"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = "https://digiwezo-alpha.vercel.app";
    try {
      const response = await fetch(`${url}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Failed to fetch data from the API.");
    }
  }

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
          <h2 className="text-primary font-semibold text-base mb-2">Log in</h2>
          <h3 className="text-primary text-sm mb-5">
            Welcome! Please Enter Details
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-primary">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-primary"
                />
                <span>Remember me</span>
              </label>

              <Link
                href="/forgotPassword"
                className="text-primary font-semibold hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-foreground font-medium py-2 rounded-md hover:bg-secondarycd transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

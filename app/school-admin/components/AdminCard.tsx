<<<<<<< HEAD
"use client";

import { dashboardData } from "@school-admin/data/dashboardData";
import StatsCards from "@school-admin/components/StatsCards";

export default function AdminCard() {
  const { user } = dashboardData;

  return (
    <>
      <div className="bg-linear-to-r from-primary to-secondary p-5 rounded-xl shadow-lg mb-6 flex items-center gap-5">
        <img
          src={user.image}
          alt="Admin"
          className="w-20 h-20 rounded-full border-2 border-white object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold text-custom-grey">
            Hello {user.name},
          </h2>
          <p className="text-custom-grey text-sm">{user.subtitle}</p>
        </div>
      </div>
      <StatsCards />
    </>
  );
=======
"use client"

import Image from "next/image"
import { getUserInfo } from "@school-admin/data/adminData"
export function GreetingCard() {
  const user = getUserInfo()

  return (
    <div className="bg-brand-gradient text-primary t-end rounded-lg p-6 flex items-center gap-6 mb-6">
      <div className="w-24 h-24 rounded-full bg- bg-custom-white flex items-center justify-center shrink-0">
        <Image src="/professional-man-with-arms-crossed.jpg" alt={user.name} width={100} height={100} className="rounded-full" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-custom-grey-700 ">Hello {user.name},</h2>
        <p className="text-custom-grey-600 text-lg">Manage the school's running from your comfort</p>
      </div>
    </div>
  )
>>>>>>> aboutUs
}

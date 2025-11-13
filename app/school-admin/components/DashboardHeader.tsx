"use client";

import { dashboardData } from "@school-admin/data/dashboardData";

export default function DashboardHeader() {
  const { user } = dashboardData;

  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-5 rounded-xl shadow-lg mb-6 flex items-center gap-5">
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
  );
}

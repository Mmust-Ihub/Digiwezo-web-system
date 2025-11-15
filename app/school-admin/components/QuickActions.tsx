"use client";

import { dashboardData } from "@school-admin/data/dashboardData";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-10">
      {dashboardData.actions.map((action) => (
        <div
          key={action.label}
          className="bg-custom-white p-4 rounded-lg shadow-lg text-center hover:bg-blend-soft-light cursor-pointer"
        >
          <div className="text-3xl">{action.icon}</div>
          <p className="mt-2 font-medium text-custom-grey">{action.label}</p>
        </div>
      ))}
    </div>
  );
}

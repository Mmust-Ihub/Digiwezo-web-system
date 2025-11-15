"use client";

import { dashboardData } from "@school-admin/data/dashboardData";

export default function StatsCards() {
  const leftStats = dashboardData.stats.filter(
    (item) => item.category === "staff" 
  );
  const rightStats = dashboardData.stats.filter(
    (item) => item.category === "student" 
  );

  const StatCard = ({ item }: { item: any }) => (
    <div className="bg-secondary text-custom-grey p-4 rounded-lg shadow-lg flex items-center justify-center gap-3">
      {item.icon && <item.icon className="w-6 h-6 text-custom-grey" />}
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold">{item.value}</div>
        <p className="text-sm">{item.label}</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        {leftStats.map((item) => (
          <StatCard key={item.label} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {rightStats.map((item) => (
          <StatCard key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}

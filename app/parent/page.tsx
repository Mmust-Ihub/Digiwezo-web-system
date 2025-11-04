"use client"

import { WelcomeCard } from "@parent/components/WelcomeCard";
import { UserInfoCard } from "@parent/components/UserInfoCard";
import { PerformanceChart } from "@parent/components/PerformanceChart";
import { FeeBalanceCard } from "@parent/components/FeeBalanceCard";

export default function ParentDashboard () {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-cyan-500">Dashboard</h2>
      
      <WelcomeCard />
      
      <UserInfoCard />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        
        <div>
          <FeeBalanceCard />
        </div>
      </div>
    </div>
  );
};


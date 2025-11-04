import { WelcomeCard } from "./components/WelcomeCard";
import { UserInfoCard } from "./components/UserInfoCard";
import { PerformanceChart } from "./components/PerformanceChart";
import { FeeBalanceCard } from "./components/FeeBalanceCard";

const ParentDashboard = () => {
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

export default ParentDashboard;

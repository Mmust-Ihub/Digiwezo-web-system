import { Users, User } from "lucide-react";

interface StatsCardProps {
  type: "total" | "male" | "female";
  count: number;
  label: string;
}

export const StatsCard = ({ type, count, label }: StatsCardProps) => {
  const getIcon = () => {
    switch(type) {
      case "total":
        return <Users className="w-12 h-12 text-primary" />;
      case "male":
        return <User className="w-12 h-12 text-primary" />;
      case "female":
        return <User className="w-12 h-12 text-primary" />;
      default:
        return <Users className="w-12 h-12 text-primary" />;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border-white w-[281px] h-[154px] p-6">
      <div className="flex items-start gap-4 h-full">
        <div className="flex-shrink-0 mt-2">
          {getIcon()}
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-bold text-gray-900 mb-1">{count}</div>
          <div className="text-base text-gray-600 font-medium">{label}</div>
        </div>
      </div>
    </div>
  );
};
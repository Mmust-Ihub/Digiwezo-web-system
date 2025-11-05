import { User } from "lucide-react";

export const UserInfoCard = () => {
  return (
    <div className="bg-background rounded-2xl p-8 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
          <User className="w-12 h-12 text-muted-foreground" />
        </div>
        
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">Peter Johnson</h3>
          <p className="text-muted-foreground">2734@bacademy</p>
          <p className="text-sm font-medium">Adm No: 2734</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-cyan-500">BOOKER ACADEMY</h2>
      </div>
    </div>
  );
};

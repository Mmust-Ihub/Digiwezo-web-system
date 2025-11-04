import { Bell, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-red-400 border-b border-border flex items-center justify-between px-8 z-10">
      <h1 className="text-2xl font-bold text-cyan-500">BOOKER ACADEMY</h1>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
          <Bell className="w-5 h-5 text-secondary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-700" />
          </div>
          <span className="font-medium">Hi, Peter</span>
        </div>
      </div>
    </header>
  );
};

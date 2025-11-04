import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeeBalanceCard = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold mb-8">Fees</h3>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center relative">
          <CreditCard className="w-12 h-12 text-white" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center border-4 border-card">
            <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-1">Fee Balance</h4>
          <p className="text-3xl font-bold">Kshs 5600</p>
        </div>
        
        <Button className="bg-secondary hover:bg-secondary/90 text-gray-900 font-semibold px-8">
          View Statement
        </Button>
      </div>
    </div>
  );
};

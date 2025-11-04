import { Button } from "@/components/ui/button";
import { PaymentIcon } from "@parent/components/icons/payment-icon";

export const FeeBalanceCard = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm">
      <h3 className="text-xl font-bold mb-8">Fees</h3>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center relative">
          <PaymentIcon className="w-32 h-32 text-white" />
        </div>
        
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-1">Fee Balance</h4>
          <p className="text-xl">Kshs 5600</p>
        </div>
        
        <Button className="bg-gradient-start hover:bg-secondary/90 text-foreground font-semibold px-8">
          View Statement
        </Button>
      </div>
    </div>
  );
};

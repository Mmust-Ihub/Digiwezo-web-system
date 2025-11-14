"use client";

import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";

export const ActionButtons = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    console.log("Download staff data");
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={handlePrint}
        className="bg-secondary text-foreground hover:bg-secondary/90"
      >
        <Printer className="w-4 h-4 mr-2" />
        Print
      </Button>
      <Button
        onClick={handleDownload}
        className="bg-primary text-white hover:bg-primary/90"
      >
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  );
};


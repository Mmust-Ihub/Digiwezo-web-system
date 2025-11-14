"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "w-10 h-10 rounded-full p-0",
          currentPage === 1
            ? "bg-light-fill neutral-border cursor-not-allowed"
            : "bg-primary text-background hover:bg-primary/90"
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "w-10 h-10 rounded-full p-0",
          currentPage === totalPages
            ? "bg-light-fill neutral-border cursor-not-allowed"
            : "bg-primary text-background hover:bg-primary/90"
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  );
};


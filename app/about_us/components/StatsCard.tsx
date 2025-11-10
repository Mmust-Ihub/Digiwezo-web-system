"use client";

import useStatsCounter from "@/about_us/hooks/useStatsCounter";

export default function StatsCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const animatedValue = useStatsCounter(value);

  return (
   <div className="bg-primary text-foreground p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
      <h3 className="text-3xl font-extrabold tracking-tight">
        {animatedValue}+
      </h3>
      <p className="mt-2 text-[var(--color-foreground)]/90 font-medium">
        {label}
      </p>
    </div>
  );
}

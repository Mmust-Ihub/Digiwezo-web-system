"use client";

import useStatsCounter from "@/about/hooks/useStatsCounter";

export default function StatsCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const animatedValue = useStatsCounter(value);

  return (
  <div className="bg-secondary text-card-foreground p-8 rounded-none shadow-md hover:shadow-lg transition-all duration-300 text-center font-bold h-full">
      <h3 className="text-4xl font-extrabold tracking-tight">
        {animatedValue}+
      </h3>
      <p className="mt-3 text-card-foreground font-bold text-lg">
        {label}
      </p>
    </div>
  );
}

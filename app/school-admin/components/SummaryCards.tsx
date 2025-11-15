"use client";

import Image from "next/image";
import { dashboardData } from "@school-admin/data/dashboardData";

export default function SummaryCards() {
  const { summary, summaries } = dashboardData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      {summaries.map((item) => {
        const data = summary[item.key as keyof typeof summary];

        const value =
          (data as any).rate || (data as any).grade || (data as any).count;

        return (
          <div
            key={item.title}
            className="bg-custom-white p-4 rounded-lg shadow-lg text-center flex flex-col items-center gap-2"
          >
            <h3 className="font-semibold">{item.title}</h3>
            {item.img && (
              <div className="relative w-16 h-16 mt-1">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {data.desc && (
              <p className="text-sm text-custom-grey">{data.desc}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

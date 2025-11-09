"use client";

import { ProfileCard } from "@parent/(features)/progress-and-report/components/ProfileCard";
import { ReportCard } from "@parent/(features)/progress-and-report/components/Report";
import { ReportDetails } from "@parent/(features)/progress-and-report/components/ReportDetails";
import { Filters } from "@parent/(features)/progress-and-report/components/Filters";

export default function ProgressReportPage() {
  return (
    <div>
      <ProfileCard />
      <div>
        <div className="bg-custom-white">
        <Filters />
        <div className="flex flex-col lg:flex-row gap-6">
          <ReportCard />
         <ReportDetails />
        </div>
        </div>
      </div>
    // </div>
  );
}

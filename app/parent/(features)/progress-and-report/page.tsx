"use client";

import { ProfileCard } from "@parent/(features)/progress-and-report/components/ProfileCard";
import { ReportCard } from "@parent/(features)/progress-and-report/components/Report";

export default function ProgressReportPage() {
  return (
    <div>
      <ProfileCard />
      <div >
        <ReportCard />
      </div>
    </div>
  );
}

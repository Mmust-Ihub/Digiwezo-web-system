"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CompetencyTable } from "@parent/(features)/progress-and-report/components/CompetencyTable";
import { AssessmentTable } from "@parent/(features)/progress-and-report/components/AssessmentTable";

export const ReportDetails = () => {
  return (
    <section className="bg-custom-white  p-6  w-full lg:w-1/2">
      <div className="space-y-6">
        <CompetencyTable />
        <AssessmentTable />
      </div>

      <div className="mt-2">
        <h3 className="text-lg font-bold mb-3 text-foreground">
          Teacher’s Feedback & Recommendations
        </h3>
        <p><b>⭐ Strengths:</b> John is organized and collaborates well with peers.</p>
        <p><b>⚠️ Areas for Improvement:</b> Needs more practice with science practicals and presentations.</p>
        <p><b>✅ Recommendations for Parents:</b></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Encourage hands-on experiments at home.</li>
          <li>Support public speaking practice.</li>
          <li>Use educational apps for digital literacy and problem-solving.</li>
        </ul>

        <div className="mt-4">
          <Button className="flex items-center gap-2">
                 <FaDownload/>
                 Download
               </Button>
        </div>
      </div>
    </section>
  );
};

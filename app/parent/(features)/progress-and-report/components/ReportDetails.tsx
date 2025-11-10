"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CompetencyTable } from "@parent/(features)/progress-and-report/components/CompetencyTable";
import { AssessmentTable } from "@parent/(features)/progress-and-report/components/AssessmentTable";

export const ReportDetails = () => {
  return (
    <section className="w-full">
      <div className="bg-custom-white p-6  h-full space-y-6"> 
        <CompetencyTable />
        <AssessmentTable />
        
        <div className="mt-2 pt-1 p-6 "> 
          <h3 className="text-lg font-bold mb-3 text-foreground">
            Teacher’s Feedback & Recommendations
          </h3>
          <p><b>⭐ Strengths:</b> John is organized and collaborates well with peers.</p>
          <p><b>⚠️ Areas for Improvement:</b> Needs more practice with science practicals and presentations.</p>
          <p><b>✅ Recommendations for Parents:</b></p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Encourage hands-on experiments at home.</li>
            <li>Support public speaking practice.</li>
            <li>Use educational apps for digital literacy and problem-solving.</li>
          </ul>

         <Button className="flex items-center gap-2 mt-2"> <FaDownload /> Download </Button>
        </div>
      </div>
    </section>
  );
};
"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";
import CompetencyTable from "@parent/(features)/progress-and-report/components/CompetencyTable";
import AssessmentTable from "@parent/(features)/progress-and-report/components/AssessmentTable";

const ReportDetails = () => {
  return (
    <section className="bg-white p-6 space-y-8 text-sm text-gray-800">
      <CompetencyTable />
      <AssessmentTable />

      {/* Teacher’s Feedback & Recommendations */}
      <div>
        <h3 className="font-semibold text-base mb-2">Teacher’s Feedback & Recommendations</h3>

        <p className="mb-2">
          <b>⭐ Strengths:</b> John is well-organized and collaborates well with peers. His
          self-discipline allows him to complete assignments on time.
        </p>

        <p className="mb-2">
          <b>⚠️ Areas for Improvement:</b> He should work on enhancing his science practical skills
          and engage more in class presentations.
        </p>

        <div>
          <b>✅ Recommendations for Parents:</b>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Encourage more hands-on experiments at home</li>
            <li>Support public speaking practice to improve confidence in oral presentations</li>
            <li>Use educational apps to enhance digital literacy and problem-solving skills</li>
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-primary text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-green-700">
            <FaDownload /> Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReportDetails;

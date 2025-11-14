"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { assessmentsData } from "@parent/(features)/progress-and-report/data/reportData";
import { Assessment } from "@parent/(features)/progress-and-report/types/reportTypes";

export const AssessmentTable = () => {
  return (
    <div className="bg-custom-white  p-6  py-1">
      <h3 className="text-xl font-bold mb-4">
        ③ Practical Assessments (Project-Based Learning)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border rounded text-sm">
          <thead className="bg-soft-gray text-left">
            <tr>
              <th className="border p-3 font-medium">Assessment Task</th>
              <th className="border p-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {assessmentsData.map(({ task, status }: Assessment) => (
              <tr key={task} className="hover:bg-soft-grey transition-colors">
                <td className="border p-3">{task}</td>
                <td className="border p-3 flex items-center gap-2">
                  {status === "Completed" ? (
                    <FaCheckCircle className="text-success shrink-0" />
                  ) : (
                    <FaTimesCircle className="text-error shrink-0" />
                  )}
                  <span>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
        <strong>Teacher’s Comment:</strong> Johnson excelled in community service and mathematics
        projects. However, he missed one class presentation; he should aim to participate actively
        in oral activities.
      </p>
    </div>
  );
};

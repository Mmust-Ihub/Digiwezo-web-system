"use client";

import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { assessmentsData } from "@parent/(features)/progress-and-report/data/assessmentsData";
import { Assessment } from "@parent/(features)/progress-and-report/types/assessmentTypes";


  export default function AssessmentTable() {
  return (
    <div className="bg-custom-white rounded-lg ">
      <h2 className="font-semibold text-base mb-3 text">
        ③ Practical Assessments (Project-Based Learning)
      </h2>

      <table className="w-full border rounded overflow-hidden text-sm">
        <thead className="bg-soft-grey text-left">
          <tr>
            <th className="border p-2">Assessment Task</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {assessmentsData.map(({ task, status }: Assessment) => (
            <tr key={task}>
              <td className="border p-2">{task}</td>
              <td className="border p-2 flex items-center gap-2">
                {status === "Completed" ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaTimesCircle className="text-red-500" />
                )}
                {status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-3 text-custom-grey text-sm leading-relaxed">
        <b>Teacher’s Comment:</b> Johnson excelled in community service and mathematics projects.
        However, he missed one class presentation; he should aim to participate actively in oral
        activities.
      </p>
    </div>
  );
};


"use client";

import React from "react";
import { FaPrint } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Filters } from "@parent/(features)/progress-and-report/components/Filters";
import { ReportDetails } from "@parent/(features)/progress-and-report/components/ReportDetails";
import { reportData } from "@parent/(features)/progress-and-report/data/reportData";
import { SubjectPerformance } from "@parent/(features)/progress-and-report/types/reportTypes";

export const ReportCard = () => {
  const { student, termSummary, subjects } = reportData;

  return (
    <section className="bg-custom-white min-h-screen p-4 sm:p-6 mt-6 rounded-2xl">
      {/* Filters */}
      <div className="mb-6 max-w-6xl mx-auto">
        <Filters />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="w-full bg-custom-white rounded-xl p-6 shadow-sm ">
          <h2 className="text-xl font-semibold mb-4 ">
            Student Progress & Report – Term {student.term} ({student.grade})
          </h2>

          {/* Student Info */}
          <div className="text-sm text-custom-grey mb-6 space-y-1">
            <p>
              <b>Student Name:</b> {student.name}
            </p>
            <p>
              <b>Admission Number:</b> {student.admissionNo}
            </p>
            <p>
              <b>Class:</b> {student.grade}
            </p>
            <p>
              <b>Term:</b> {student.term}
            </p>
            <p>
              <b>Year:</b> {student.year}
            </p>
          </div>

          {/* Term Summary */}
          <section className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">
              Term Performance Summary
            </h3>
            <p className="text-sm">
              Overall Performance Score:{" "}
              <b>{termSummary.overallScore}</b> – {termSummary.level}
            </p>
            <p className="text-sm mt-1">{termSummary.comment}</p>
          </section>

          {/* Subject Performance */}
          <section>
            <h3 className="font-semibold text-gray-700 mb-2">
              Learning Areas & Competencies
            </h3>
            <h4 className="font-bold text-gray-800 pb-2 text-sm">
              Learning Areas Performance (Subject-Wise Score)
            </h4>

            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm rounded-lg overflow-hidden">
                <thead className="bg-soft-grey text-left">
                  <tr>
                    <th className="border p-2">Learning Area</th>
                    <th className="border p-2">Score</th>
                    <th className="border p-2">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject: SubjectPerformance) => (
                    <tr key={subject.area} >
                      <td className="border p-2">{subject.area}</td>
                      <td className="border p-2">{subject.score}</td>
                      <td className="border p-2">{subject.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm mt-3">
              <b>Teacher's Note:</b>{" "}
              <i>
                Johnson demonstrated good understanding in most subjects,
                particularly in English and Science. More engagement in science
                projects will enhance his exploration skills.
              </i>
            </p>
          </section>

        <Button className="flex items-center gap-2 mt-3"> <FaPrint /> Print </Button>
        </div>

        <div className="w-full bg-custom-white rounded-xl p-6 shadow-sm ">
          <ReportDetails />
        </div>
      </div>
    </section>
  );
};
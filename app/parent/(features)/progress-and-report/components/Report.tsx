"use client";

import React from "react";
import { FaPrint } from "react-icons/fa";
import { reportData } from "@parent/(features)/progress-and-report/data/reportData";
import { SubjectPerformance } from "@parent/(features)/progress-and-report/types/reportTypes";
import { Button } from "components/ui/button";

export default function ReportCard() {
  const { student, termSummary, subjects } = reportData;

  return (
    <section className="bg-custom-white p-6 rounded-md ">
      <h2 className="text-lg font-semibold mb-2">
        Student Progress & Report – Term {student.term} ({student.grade})
      </h2>

      {/* Student Info */}
      <div className="text-sm text-custom-grey mb-4 space-y-1">
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

      {/* Term Performance Summary */}
      <section className="mb-6">
        <h3 className="font-semibold text-custom-grey mb-1">
          Term Performance Summary
        </h3>
        <p className="text-sm">
          Overall Performance Score: <b>{termSummary.overallScore}</b> –{" "}
          {termSummary.level}
        </p>
        <p className="text-sm mt-1">
          Teacher’s Comment: {termSummary.comment}
        </p>
      </section>

      {/* Subject Performance Table */}
      <section>
        <h3 className="font-semibold mb-1">
          Learning Areas & Competencies
        </h3>
        <h4 className="font-bold text-gray-800 pb-4">
          Learning Areas Performance (Subject-Wise Score)
        </h4>

        <table className="w-full border text-sm rounded overflow-hidden">
          <thead className="bg-soft-gray">
            <tr>
              <th className="border p-2 text-left">Learning Area</th>
              <th className="border p-2 text-left">Performance Score</th>
              <th className="border p-2 text-left">Achievement Level</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject: SubjectPerformance) => (
              <tr key={subject.area}>
                <td className="border p-2">{subject.area}</td>
                <td className="border p-2">{subject.score}</td>
                <td className="border p-2">{subject.level}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-sm p-2">
          <b>Teacher's Note:</b>{" "}
          <i>
            Johnson demonstrated good understanding in most subjects,
            particularly in English and Science. More engagement in science
            projects will enhance his exploration skills.
          </i>
        </p>
      </section>
      <Button className="mt-6  gap-4">
          <FaPrint /> Print
        </Button>

        
    </section>

   
  );
};



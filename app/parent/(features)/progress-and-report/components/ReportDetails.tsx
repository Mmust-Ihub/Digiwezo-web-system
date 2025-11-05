"use client";

import React from "react";
import { FaStar, FaStarHalfAlt, FaCheckCircle, FaTimesCircle,FaDownload } from "react-icons/fa";

const competencies = [
  { competency: "Communication & Collaboration", rating: 4 },
  { competency: "Critical Thinking & Problem Solving", rating: 3.5 },
  { competency: "Self-Management", rating: 4 },
  { competency: "Digital Literacy", rating: 4 },
  { competency: "Citizenship & Social Responsibility", rating: 3 },
];

const assessments = [
  { task: "Science Experiment (Simple Machines Project)", status: "Completed" },
  { task: "Community Service (Tree Planting Activity)", status: "Not Completed" },
  { task: "Class Presentation (Oral Interaction in Kiswahili)", status: "Completed" },
  { task: "Mathematics Practical (Fractions & Ratios in Daily Life)", status: "Completed" },
];

const ReportDetails = () => {
  return (
    <section className="bg-white p-6 space-y-8 text-sm text-gray-800">
     
      <div>
        <h2 className="font-semibold text-base mb-3">
          ② Core Competencies Development (Rated from ⭐ to ⭐⭐⭐⭐⭐)
        </h2>

        <table className="w-full border rounded overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">Competency</th>
              <th className="border p-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {competencies.map(({ competency, rating }) => (
              <tr key={competency}>
                <td className="border p-2">{competency}</td>
                <td className="border p-2 flex items-center space-x-1">
                  {[...Array(Math.floor(rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-2 text-gray-700">
          <b>Comment:</b> Johnson communicates his ideas well in group discussions and can manage
          his learning activities independently. Critical thinking can improve with more
          problem-solving exercises.
        </p>
      </div>

      {/*Practical Assessments */}
      <div>
        <h2 className="font-semibold text-base mb-3">
          ③ Practical Assessments (Project-Based Learning)
        </h2>

        <table className="w-full border rounded overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border p-2">Assessment Task</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map(({ task, status }) => (
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

        <p className="mt-2 text-gray-700">
          <b>Teacher’s Comment:</b> Johnson excelled in community service and mathematics projects.
          However, he missed one class presentation; he should aim to participate actively in oral
          activities.
        </p>
      </div>

      {/*  Teacher’s Feedback & Recommendations */}
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
                <FaDownload/>Download
                </button>
               
              </div>
      </div>
      
    </section>
  );
};

export default ReportDetails;

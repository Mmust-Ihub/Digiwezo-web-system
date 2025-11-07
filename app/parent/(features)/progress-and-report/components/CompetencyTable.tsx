import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const assessments = [
  { task: "Science Experiment (Simple Machines Project)", status: "Completed" },
  { task: "Community Service (Tree Planting Activity)", status: "Not Completed" },
  { task: "Class Presentation (Oral Interaction in Kiswahili)", status: "Completed" },
  { task: "Mathematics Practical (Fractions & Ratios in Daily Life)", status: "Completed" },
];

const AssessmentTable = () => {
  return (
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
  );
};

export default AssessmentTable;

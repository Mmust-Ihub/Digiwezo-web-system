import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const competencies = [
  { competency: "Communication & Collaboration", rating: 4 },
  { competency: "Critical Thinking & Problem Solving", rating: 3.5 },
  { competency: "Self-Management", rating: 4 },
  { competency: "Digital Literacy", rating: 4 },
  { competency: "Citizenship & Social Responsibility", rating: 3 },
];

const CompetencyTable = () => {
  return (
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
  );
};

export default CompetencyTable;

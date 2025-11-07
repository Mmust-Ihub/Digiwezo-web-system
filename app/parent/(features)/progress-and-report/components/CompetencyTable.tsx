"use client";

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { competenciesData, competencyComment } from "@parent/(features)/progress-and-report/data/competenciesData";
import { Competency } from "@parent/(features)/progress-and-report/types/competencyTypes";

const CompetencyTable: React.FC = () => {
  return (
    <div>
      <h2 className="font-semibold text-base mb-3">
        ② Core Competencies Development (Rated from ⭐ to ⭐⭐⭐⭐⭐)
      </h2>

      <table className="w-full border rounded overflow-hidden">
        <thead className="bg-soft-grey text-left">
          <tr>
            <th className="border p-2">Competency</th>
            <th className="border p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {competenciesData.map(({ competency, rating }: Competency) => (
            <tr key={competency}>
              <td className="border p-2">{competency}</td>
              <td className="border p-2 flex items-center space-x-1">
                {[...Array(Math.floor(rating))].map((_, i) => (
                  <FaStar key={i} className="text-secondary" />
                ))}
                {rating % 1 !== 0 && <FaStarHalfAlt className="text-secondary" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-2 text-custom-grey">
        <b>Comment:</b> {competencyComment}
      </p>
    </div>
  );
};

export default CompetencyTable;

"use client";

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {competenciesData, competencyComment,} from "@parent/(features)/progress-and-report/data/competenciesData";
import { Competency } from "@parent/(features)/progress-and-report/types/competencyTypes";

export const CompetencyTable = () => {
  return (
    <div className="bg-card  p-8 ">
      <h3 className="text-xl font-bold mb-4">
        ② Core Competencies Development (Rated from ⭐ to ⭐⭐⭐⭐⭐)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border rounded text-sm">
          <thead className="bg-soft-gray text-left">
            <tr>
              <th className="border p-3 font-medium">Competency</th>
              <th className="border p-3 font-medium">Rating</th>
            </tr>
          </thead>
          <tbody>
            {competenciesData.map(({ competency, rating }: Competency) => (
              <tr key={competency} className="hover:bg-gray-50 transition-colors">
                <td className="border p-3">{competency}</td>
                <td className="border p-3 flex items-center space-x-1">
                  {[...Array(Math.floor(rating))].map((_, i) => (
                    <FaStar key={i} className="text-secondary shrink-0" />
                  ))}
                  {rating % 1 !== 0 && (
                    <FaStarHalfAlt className="text-secondary shrink-0" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
        <strong>Comment:</strong> {competencyComment}
      </p>
    </div>
  );
};

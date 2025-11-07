"use client";

import React from "react";
import { useFilters } from "@parent/(features)/progress-and-report/hooks/useFilters";
import { filterData } from "@parent/(features)/progress-and-report/data/filterData";
import { FiltersProps } from "@parent/(features)/progress-and-report/data/filterTypes";

const Filters: React.FC = () => {
  const { grade, term, handleGradeChange, handleTermChange, handleSubmit } =
    useFilters() as FiltersProps;

  const { grades, terms } = filterData;

  return (
    <section className="bg-white p-6 mb-8 rounded-md shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grade Selector */}
        <div>
          <label htmlFor="grade" className="block font-medium mb-1">
            Grade Performance
          </label>
          <select
            id="grade"
            className="w-full border border-amber-500 rounded-md p-2"
            value={grade}
            onChange={handleGradeChange}
          >
            {grades.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Term Selector */}
        <div>
          <label htmlFor="term" className="block font-medium mb-1">
            Term
          </label>
          <select
            id="term"
            className="w-full border border-amber-500 rounded-md p-2"
            value={term}
            onChange={handleTermChange}
          >
            {terms.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded w-full"
          >
            View Performance
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;

"use client";

import React from "react";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  const {
    grade,
    term,
    handleGradeChange,
    handleTermChange,
    handleSubmit,
  } = useFilters();

  return (
    <section className="bg-white p-6 mb-8">
      <div className="grid grid-cols-3 gap-4">
     
        <div>
          <label className="block font-medium mb-1">Grade Performance</label>
          <select
            className="w-full border border-amber-500 rounded-md p-2"
            value={grade}
            onChange={handleGradeChange}
          >
            <option value="">Select</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
          </select>
        </div>

     
        <div>
          <label className="block font-medium mb-1">Term</label>
          <select
            className="w-full border border-amber-500 rounded-md p-2"
            value={term}
            onChange={handleTermChange}
          >
            <option value="">Select</option>
            <option value="Term 1">Term 1</option>
            <option value="Term 2">Term 2</option>
            <option value="Term 3">Term 3</option>
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

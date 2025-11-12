"use client";

import React from "react";
import { useFilters } from "@parent/(features)/progress-and-report/hooks/useFilters";
import { filterData } from "@parent/(features)/progress-and-report/data/filterData";
import { FiltersProps } from "@parent/(features)/progress-and-report/types/filterTypes";
import { Button } from "components/ui/button";

export default function Filters() {
  const { grade, term, handleGradeChange, handleTermChange, handleSubmit } =
    useFilters() as FiltersProps;

  const { grades, terms } = filterData;

  return (
    <section className="bg-custom-white p-6 mb-8 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grade Selector */}
        <div>
          <label htmlFor="grade" className="block font-medium mb-1 text-foreground">
            Grade Performance
          </label>
          <select
            id="grade"
            className="w-full border border-primary rounded-md p-2 bg-custom-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
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
          <label htmlFor="term" className="block font-medium mb-1 text-foreground">
            Term
          </label>
          <select
            id="term"
            className="w-full border border-primary rounded-md p-2 bg-custom-white text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
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

<Button onClick={handleSubmit} className="mt-8 ">View perfomance</Button>
      </div>
    </section>
  );
};



"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFilters } from "@parent/(features)/progress-and-report/hooks/useFilters";
import { filterData } from "@parent/(features)/progress-and-report/data/filterData";
import { FiltersProps } from "@parent/(features)/progress-and-report/types/filterTypes";

export const Filters = () => {
  const { grade, term, handleGradeChange, handleTermChange, handleSubmit } =
    useFilters() as FiltersProps;

  const { grades, terms } = filterData;

  return (
    <section className="bg-custom-white rounded-2xl  p-6 w-full mt-6">
      <h3 className="text-xl font-bold mb-6 text-foreground">
        Filter Student Performance
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Grade Selector */}
        <div className="flex flex-col">
          <label className="font-medium mb-2 text-foreground">Grade</label>
          <select
            className="border border-primary rounded-md p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition"
            value={grade}
            onChange={handleGradeChange}
          >
            <option value="">Select Grade</option>
            {grades.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Term Selector */}
        <div className="flex flex-col">
          <label className="font-medium mb-2 text-foreground">Term</label>
          <select
            className="border border-primary rounded-md p-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition"
            value={term}
            onChange={handleTermChange}
          >
            <option value="">Select Term</option>
            {terms.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <Button
            onClick={handleSubmit}
            disabled={!grade || !term}
            className="w-full bg-gradient-start hover:bg-secondary/90 text-foreground font-semibold disabled:opacity-50"
          >
            View Performance
          </Button>
        </div>
      </div>
    </section>
  );
};

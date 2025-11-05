import { useState } from "react";

export const useFilters = () => {
  const [grade, setGrade] = useState("");
  const [term, setTerm] = useState("");

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGrade(e.target.value);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTerm(e.target.value);
  };

  const handleSubmit = () => {
   
    console.log("Filters applied:", { grade, term });
  };

  return {
    grade,
    term,
    handleGradeChange,
    handleTermChange,
    handleSubmit,
  };
};

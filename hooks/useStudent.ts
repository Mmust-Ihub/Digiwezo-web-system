import { useState, useEffect } from "react";

export interface Subject {
  area: string;
  score: string;
  level: string;
}

export interface Student {
  name: "Peter Johnson";
  email?:"example@GiMailShirt.com";
  admissionNo: "1234";
  school?: "BOOKER ACADEMY";
  image?: string;
  class?: string;
  term?: string;
  year?: string;
  overallScore?: string;
  performanceLevel?: string;
  comment?: string;
  subjects?: Subject[];
}

export const useStudent = (studentId: string) => {
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://your-backend-domain.com/api/students/${studentId}`
        );
        if (!response.ok) throw new Error("Failed to fetch student data");
        const data = await response.json();
        setStudent(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  return { student, loading, error };
};

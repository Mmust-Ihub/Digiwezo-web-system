import { subjects } from "@parent/data/constants";
import { useState, useEffect } from "react";
import { Student } from "@parent/(features)/progress-and-report/types/studentTypes";

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


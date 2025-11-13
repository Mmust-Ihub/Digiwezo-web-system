export interface SubjectPerformance {
  area: string;
  score: string;
  level: string;
}

export interface StudentInfo {
  name: string;
  admissionNo: string;
  grade: string;
  term: string;
  year: string;
}

export interface TermSummary {
  overallScore: string;
  level: string;
  comment: string;
}

export interface ReportData {
  student: StudentInfo;
  termSummary: TermSummary;
  subjects: SubjectPerformance[];
}

export interface Assessment {
  task: string;
  status: "Completed" | "Not Completed";
}
export interface Competency {
  competency: string;
  rating: number; 
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FiltersData {
  grades: FilterOption[];
  terms: FilterOption[];
}

export interface FiltersProps {
  grade: string;
  term: string;
  handleGradeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTermChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

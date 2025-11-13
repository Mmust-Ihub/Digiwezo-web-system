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

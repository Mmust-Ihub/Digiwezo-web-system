export interface StudentProfile {
  name: string;
  email?: string;
  admissionNo: string;
  school?: string;
  image?: string;
  class?: string;
  term?: string;
  year?: string;
  overallScore?: string;
  performanceLevel?: string;
  comment?: string;
  subjects?: {
    area: string;
    score: string;
    level: string;
  }[];
}

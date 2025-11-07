import { ReportData } from "@parent/(features)/progress-and-report/data/reportTypes";

export const reportData: ReportData = {
  student: {
    name: "Peter Johnson",
    admissionNo: "2734",
    grade: "Grade 6",
    term: "1",
    year: "2025",
  },
  termSummary: {
    overallScore: "75%",
    level: "Meeting Expectations",
    comment:
      "Peter has shown consistent progress and engagement throughout the term.",
  },
  subjects: [
    { area: "English", score: "78%", level: "Meeting Expectations" },
    { area: "Mathematics", score: "72%", level: "Meeting Expectation" },
    { area: "Science", score: "80%", level: "Exceeding Expectations" },
    { area: "Kiswahili", score: "70%", level: "Satisfactory" },
    { area: "Social Studies", score: "74%", level: "Meeting Expectations" },
  ],
};

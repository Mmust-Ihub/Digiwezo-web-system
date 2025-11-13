import { ReportData } from "@parent/(features)/progress-and-report/types/reportTypes";
import { Competency } from "@parent/(features)/progress-and-report/types/reportTypes";
import { Assessment } from "@parent/(features)/progress-and-report/types/reportTypes";
import { FiltersData } from "@parent/(features)/progress-and-report/types/reportTypes";

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
    { area: "biology", score: "74%", level: "Meeting Expectations" },
      { area: "Physics", score: "78%", level: "Meeting Expectations" },
    { area: "Business", score: "72%", level: "Meeting Expectation" },
    { area: "Agriculture", score: "80%", level: "Exceeding Expectations" },
    { area: "Computer", score: "70%", level: "Satisfactory" },
    { area: "Home science", score: "74%", level: "Meeting Expectations" },
  ],
};

export const competenciesData: Competency[] = [
  { competency: "Communication & Collaboration", rating: 4 },
  { competency: "Critical Thinking & Problem Solving", rating: 3.5 },
  { competency: "Self-Management", rating: 4 },
  { competency: "Digital Literacy", rating: 4 },
  { competency: "Citizenship & Social Responsibility", rating: 3 },
];

export const competencyComment =
  "Johnson communicates his ideas well in group discussions and can manage his learning activities independently. Critical thinking can improve with more problem-solving exercises.";

  export const assessmentsData: Assessment[] = [
  { task: "Science Experiment (Simple Machines Project)", status: "Completed" },
  { task: "Community Service (Tree Planting Activity)", status: "Not Completed" },
  { task: "Class Presentation (Oral Interaction in Kiswahili)", status: "Completed" },
  { task: "Mathematics Practical (Fractions & Ratios in Daily Life)", status: "Completed" },
];

export const filterData: FiltersData = {
  grades: [
    { label: "Select", value: "" },
    { label: "Grade 6", value: "Grade 6" },
    { label: "Grade 7", value: "Grade 7" },
    { label: "Grade 8", value: "Grade 8" },
  ],
  terms: [
    { label: "Select", value: "" },
    { label: "Term 1", value: "Term 1" },
    { label: "Term 2", value: "Term 2" },
    { label: "Term 3", value: "Term 3" },
  ],
};

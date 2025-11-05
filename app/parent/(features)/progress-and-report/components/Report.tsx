import React from "react";
import { FaPrint} from "react-icons/fa";

const ReportCard = () => {
  const subjects = [
    { area: "English", score: "78%", level: "Meeting Expectations" },
    {area:"Mathematics", score:"72%", level:"Meeting Expectation"},
    { area: "Science", score: "80%", level: "Exceeding Expectations" },
    { area: "Kiswahili", score: "70%", level: "Satisfactory" },
      { area: "English", score: "78%", level: "Meeting Expectations" },
    {area:"Mathematics", score:"72%", level:"Meeting Expectation"},
    { area: "Science", score: "80%", level: "Exceeding Expectations" },
    { area: "Kiswahili", score: "70%", level: "Satisfactory" },
  ];

  return (
    <section className="bg-white p-6">
       

      <h2 className="text-lg font-semibold mb-2">
        Student Progress & Report – Term 1 (Grade 6)
      </h2>

      <div className="text-sm text-gray-700 mb-4">
        <p><b>Student Name: </b> Peter Johnson</p>
        <p><b>Admission Number: </b> 2734</p>
        <p><b>Class: </b> Grade 6</p>
        <p><b>Term: </b> 1</p>
        <p><b>Year: </b> 2025</p>
      </div>

      <section className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-1">
          Term Performance Summary
        </h3>
        <p className="text-sm">
          Overall Performance Score: <b>75%</b> – Meeting Expectations
        </p>
        <p className="text-sm mt-1">
          Teacher’s Comment: Peter has shown consistent progress and engagement
          throughout the term.
        </p>
      </section>

      <section>
        <h3 className="font-semibold mb-1">
           Learning Areas & Competencies
        </h3>
        <h4 className="font-bold  text-gray-800 pb-4">Learning Areas Perfomance(Subject-Wise Score) </h4>
        <table className="w-full border text-sm rounded overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Learning Area</th>
              <th className="border p-2 text-left">Performance Score</th>
              <th className="border p-2 text-left">Achievement Level</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(({ area, score, level }) => (
              <tr key={area}>
                <td className="border p-2">{area}</td>
                <td className="border p-2">{score}</td>
                <td className="border p-2">{level}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-sm p-2">
         <b> Teacher's Note:</b> <i>Johnson demonstrated good understanding in most subjects
          particularly in English and Physics Education. More engangement in science projects will ehance his exploration skills</i>
        </p>
      </section>

      <div className="flex gap-4 mt-6">
        <button className="bg-primary text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-green-700">
          <FaPrint /> Print
        </button>
       
      </div>
    </section>
  );
};

export default ReportCard;

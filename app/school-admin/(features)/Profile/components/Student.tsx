"use client";
import { useState } from "react";
import { studentSections } from "../data/studentData";
import { ProfileCard } from "./ProfileCard";

export default function StudentProfile() {
  const [formData, setFormData] = useState<Record<string, string>>({
    admissionNo: "2734",
    grade: "6",
    gender: "Male",
    residence: "",
    upi: "",
    emergencyName: "Eric Johnson",
    relationship: "Father",
    primaryContact: "+254756188634",
    secondaryContact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Separate left and right fields
  const leftFields = [
    "admissionNo",
    "grade",
    "gender",
    "residence",
    "upi",
  ];
  const rightFields = [
    "emergencyName",
    "relationship",
    "primaryContact",
    "secondaryContact",
  ];

  // Helper to get field data from studentSections
  const getFieldLabel = (name: string) => {
    for (const section of studentSections) {
      const field = section.fields.find((f) => f.name === name);
      if (field) return field.label;
    }
    return name;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-3/4">
        <div className="flex">
          {/* Left Profile Column */}
          <div className="w-1/4 border-r border-gray-200 flex justify-center items-start py-10">
            <ProfileCard name="Peter Johnson" imageSrc="/profile-avatar.png" />
          </div>

          {/* Right Form Column */}
          <div className="flex-1 px-10 py-8">
            <h3 className="text-sky-600 font-semibold text-sm mb-6">Profile</h3>

            <div className="flex gap-x-8">
              {/* Left Column */}
              <div className="flex-1 flex flex-col space-y-5">
                {leftFields.map((name) => (
                  <div key={name}>
                    <label className="block text-xs text-gray-700 mb-1">
                      {getFieldLabel(name)}
                    </label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                      className="w-full border border-sky-300 rounded-md px-3 py-2 text-sm italic focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col space-y-5">
                {rightFields.map((name) => (
                  <div key={name}>
                    <label className="block text-xs text-gray-700 mb-1">
                      {getFieldLabel(name)}
                    </label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                      className="w-full border border-sky-300 rounded-md px-3 py-2 text-sm italic focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-start mt-8">
              <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-medium text-sm px-8 py-2 rounded shadow-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

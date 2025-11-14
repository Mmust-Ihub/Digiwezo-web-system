"use client";
import { useState } from "react";
import { ProfileCard } from "@school-admin/(features)/Profile/components/ProfileCard";
import { studentProfile } from "@/school-admin/(features)/Profile/data/studentData";
import { Button } from "@/components/ui/button";

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

  const leftFields = studentProfile.fields.slice(0, 5);
  const rightFields = studentProfile.fields.slice(5);

  return (
    <div className="min-h-screen flex justify-center items-start pt-20 pb-20 p-4 sm:p-8 bg-background">
      <div className=" mb-4">
        <h2 className="text-primary font-normal text-lg pl-4">Profile</h2>
      </div>
      <div className="bg-white max-w-5xl w-full border-0 rounded-xl shadow-2xl">
        <div className="flex pt-4 pb-12 h-full">
          <div className="w-[25%] flex flex-col items-center pt-8">
            <ProfileCard name="Peter Johnson" imageSrc="/profile-avatar.png" />
          </div>

          <div className="w-[75%] pr-10 pl-4 overflow-y-auto max-h-[70vh] pb-6">
            <h3 className="text-primary font-medium text-lg mb-8">
              Personal Information
            </h3>

            <div className="flex gap-x-12">
              <div className="flex-1 space-y-8">
                {leftFields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-mb text-foreground mb-1">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full border border-primary rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
              <div className="flex-1 space-y-8">
                {rightFields.map((field) => (
                  <div className="-mt-1" key={field.name}>
                    <label className="block text-mb text-foreground mb-1">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full border border-primary rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="bg-secondary text-foreground font-bold text-base px-8 py-3 rounded-lg shadow-lg ">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

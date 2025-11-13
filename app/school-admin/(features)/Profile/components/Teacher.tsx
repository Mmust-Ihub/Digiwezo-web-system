"use client";
import { useState } from "react";
import { studentSections } from "../data/studentData";
import { ProfileCard } from "./ProfileCard";
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex border border-soft-grey">
     <ProfileCard name="Peter Johnson" imageSrc="/profile-avatar.png" />
 <div className="flex-1 p-10">
        <h3 className="text-primary font-semibold mb-6">Profile</h3>
        {studentSections.map((section, sIdx) => (
          <section key={sIdx} className="mb-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {section.fields.map((field, idx) => (
                <div key={idx} className="space-y">
                  <label className="block text-xs text-foreground mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-primary rounded-md text-sm italic focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        
 <div className="flex justify-start mt-6">
          <Button className="bg-secondary text-foreground font-medium px-8 py-2 rounded shadow-sm">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

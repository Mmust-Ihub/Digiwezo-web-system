"use client";
import { useState } from "react";
import { teacherSections } from "@/school-admin/(features)/Profile/data/teacherData";
import { ProfileCard } from "@/school-admin/(features)/Profile/components/ProfileCard";
import { Button } from "@/components/ui/button";

export default function TeacherProfile() {
  const [formData, setFormData] = useState<Record<string, string>>({
    tscNo: "H234T",
    name: "Mary Machoka James",
    gender: "Female",
    nationalId: "40123465",
    dob: "02/08/1984",
    nationality: "Kenyan",
    religion: "Christian",
    email: "maryjames2@gmail.com",
    language: "English/Kiswahili/French",
    disability: "None",
    phone: "0782345678",
    address: "P.o. box-678",
    emergencyName: "Charles Rori Ongwaya",
    emergencyPhone: "0702345671",
    relationship: "Husband",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white flex border border-soft-grey shadow-2xl">
      
      <ProfileCard
        name="Mary Machoka James"
        email="maryjames2@gmail.com"
        username="maryjames2@gmail.com"
        imageSrc="/profile-avatar.png"
      />
      <div className="flex-1 p-10">
        {teacherSections.map((section, sIdx) => (
          <section key={sIdx} className="mb-8">
            <h3 className="text-primary font-semibold mb-4">{section.title}</h3>

            <div
              className={`grid ${
                section.title === "Personal Details"
                  ? "grid-cols-3"
                  : "grid-cols-3"
              } gap-6`}
            >
              {section.fields.map((field, idx) => (
                <div key={idx}>
                  <label className="block text-xs text-foreground mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full p-2 bg-soft-grey border border-gray-300 rounded-sm text-sm focus:outline-none shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        
        <div className="flex justify-center mt-6">
          <Button className="bg-secondary text-foreground font-medium px-8 py-2 rounded shadow hover:brightness-95">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { studentData } from "@parent/(features)/progress-and-report/data/studentData";

export default function ProfileCard() {
  const { name, email, admissionNo, school, image } = studentData;

  return (
    <section className="bg-custom-white shadow rounded-xl p-6 mb-8 flex justify-between items-center border border-primary">
      {/* Left: Avatar + Info */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-background rounded-full overflow-hidden border border-secondary">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : null}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-custom-grey">{email}</p>
          <p className="text-sm text-custom-grey">Adm No: {admissionNo}</p>
        </div>
      </div>

      {/* Right: School name */}
      <span className="text-primary font-bold text-lg">{school}</span>
    </section>
  );
};



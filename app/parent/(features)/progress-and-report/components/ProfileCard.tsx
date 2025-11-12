"use client";

import React from "react";
import Image from "next/image";
import { studentData } from "@parent/(features)/progress-and-report/data/studentData";

export const ProfileCard = () => {
  const { name, email, admissionNo, school, image } = studentData;

  return (
    <section className="bg-custom-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-secondary">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, 64px"
              priority
            />
          )}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground break-all">{email}</p>
          <p className="text-sm text-muted-foreground">Adm No: {admissionNo}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="text-primary font-bold text-lg">{school}</span>
      </div>
    </section>
  );
};

<<<<<<< HEAD
"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ADD_TYPES } from "@school-admin/(features)/students/data/constants";
import {  studentAddType } from "@school-admin/(features)/students/types/enum";
import { useStudent } from "@school-admin/(features)/students/hooks/useSearch";
import { Button } from "@/components/ui/button";
import AddStudent from "@school-admin/(features)/students/components/new/add-student";

export default function AddStudentPage() {
  const { addType,  changeAddType, handleAddStudent } =
    useStudent();
  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Add By</h1>
      <div className="w-full md:w-2/3" >

      <RadioGroup
        value={addType}
        onValueChange={(value) => changeAddType(value as studentAddType)}
        className="grid gap-2 md:grid-cols-2 ">
        {ADD_TYPES.map((type) => (
          <label
            key={type.value}
            className="flex items-center gap-2 p-2  rounded cursor-pointer w-full justify-evenly">
            <RadioGroupItem value={type.value} />
            <span>{type.label}</span>
          </label>
        ))}
      </RadioGroup>
      </div>

      <AddStudent/>

      
    </div>
  );
=======
import React from 'react'

export default function page() {
  return (
    <div>Add Student</div>
  )
>>>>>>> aboutUs
}

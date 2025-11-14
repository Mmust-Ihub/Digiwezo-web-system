"use client";

import { useState } from "react";
import { Modal } from "@school-admin/components/Modal";
import { Button } from "@/components/ui/button";
import { Staff } from "@school-admin/types/staff";
import { StaffFormField } from "./StaffFormField";

interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (staff: Omit<Staff, "id">) => void;
}

const initialFormData = {
  name: "",
  title: "",
  gender: "",
  phone: "",
  idNumber: "",
  address: "",
};

export const AddStaffModal = ({
  isOpen,
  onClose,
  onAdd,
}: AddStaffModalProps) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = `${formData.name.toLowerCase().replace(/\s+/g, "")}@bookeracademy`;
    onAdd({
      name: formData.name,
      email,
      phone: formData.phone,
      gender: formData.gender as "male" | "female",
    });
    setFormData(initialFormData);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fill in the details of the staff">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <StaffFormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter full name"
          />
          <StaffFormField
            label="Title/ Job Role"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter job role"
          />
          <StaffFormField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            type="select"
            required
            options={[
              { value: "", label: "Select gender" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <StaffFormField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
          <StaffFormField
            label="ID Number"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            placeholder="Enter ID number"
          />
          <StaffFormField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-primary text-background hover:bg-primary/90 px-8"
          >
            Add Staff
          </Button>
        </div>
      </form>
    </Modal>
  );
};


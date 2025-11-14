"use client";

import { useState } from "react";
import { Modal } from "@school-admin/components/Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

interface AddStaffGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
}

export const AddStaffGroupModal = ({
  isOpen,
  onClose,
  onAdd,
}: AddStaffGroupModalProps) => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (groupName.trim()) {
      onAdd(groupName.trim());
      setGroupName("");
      setDescription("");
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Staff Group"
      className="max-w-md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <p className="text-sm text-custom-grey">
            Create a new group to organize your staff members
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-custom-grey mb-2">
            Group Name <span className="text-red-500">*</span>
          </label>
          <Input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
            placeholder="e.g., Bursers, Security, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-custom-grey mb-2">
            Description (Optional)
          </label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of the group"
          />
        </div>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="px-6"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary text-background hover:bg-primary/90 px-8"
          >
            Create Group
          </Button>
        </div>
      </form>
    </Modal>
  );
};


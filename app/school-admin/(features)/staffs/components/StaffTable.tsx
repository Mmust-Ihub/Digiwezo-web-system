"use client";

import { Staff } from "@school-admin/types/staff";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface StaffTableProps {
  staff: Staff[];
  startIndex: number;
  onView: (staff: Staff) => void;
}

export const StaffTable = ({ staff, startIndex, onView }: StaffTableProps) => {
  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-base-background border-b">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              #
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              Email Address
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              Phone
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member, index) => (
            <tr
              key={member.id}
              className="border-b hover:bg-base-background transition-colors"
            >
              <td className="px-6 py-4 text-sm text-foreground">
                {startIndex + index + 1}
              </td>
              <td className="px-6 py-4 text-sm text-foreground font-medium">
                {member.name}
              </td>
              <td className="px-6 py-4 text-sm text-custom-grey">
                {member.email}
              </td>
              <td className="px-6 py-4 text-sm text-custom-grey">
                {member.phone}
              </td>
              <td className="px-6 py-4">
                <Button
                  onClick={() => onView(member)}
                  className="bg-primary text-background hover:bg-primary/90 h-8 px-4 text-sm"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


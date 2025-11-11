"use client";

import { StaffGroup } from "@school-admin/(features)/staffs/types/staffGroup";

interface StaffGroupsTableProps {
  groups: StaffGroup[];
  startIndex: number;
}

export const StaffGroupsTable = ({
  groups,
  startIndex,
}: StaffGroupsTableProps) => {
  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-base-background border-b">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              #
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-custom-grey">
              Name of the Group
            </th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr
              key={group.id}
              className="border-b hover:bg-base-background transition-colors"
            >
              <td className="px-6 py-4 text-sm text-foreground">
                {startIndex + index + 1}
              </td>
              <td className="px-6 py-4 text-sm text-foreground font-medium">
                {group.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


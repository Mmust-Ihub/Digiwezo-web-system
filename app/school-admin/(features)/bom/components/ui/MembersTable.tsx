import { memo } from "react";
import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";
import { MemberRow } from "@school-admin/(features)/bom/components/ui/MemberRow";
import { TableHeader } from "@school-admin/(features)/bom/components/ui/TableHeader";
import { tableStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface MembersTableProps {
  members: BomMember[];
  onViewMember?: (id: number) => void;
  startIndex?: number;
}

export const MembersTable = memo(function MembersTable({ members, onViewMember, startIndex = 0 }: MembersTableProps) {
  return (
    <div className={tableStyles.container}>
      <table className={tableStyles.table}>
        <TableHeader />
        <tbody className={tableStyles.body}>
          {members.map((member, index) => (
            <MemberRow
              key={member.id}
              member={member}
              index={index}
              onViewMember={onViewMember}
              startIndex={startIndex}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
});


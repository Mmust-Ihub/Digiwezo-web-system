import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";
import { tableStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface MembersTableProps {
  members: BomMember[];
  onViewMember?: (id: number) => void;
}

const tableHeaders = ["#", "Name", "UserName", "Phone", "Action"];

export function MembersTable({ members, onViewMember }: MembersTableProps) {
  return (
    <div className={tableStyles.container}>
      <table className={tableStyles.table}>
        <thead className={tableStyles.header}>
          <tr className={tableStyles.headerRow}>
            {tableHeaders.map((header) => (
              <th key={header} className={tableStyles.headerCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tableStyles.body}>
          {members.map((member, index) => (
            <tr key={member.id} className={tableStyles.bodyRow}>
              <td className={tableStyles.indexCell}>{index + 1}</td>
              <td className={tableStyles.bodyCell}>{member.name}</td>
              <td className={tableStyles.usernameCell}>
                <div className="flex items-center">
                  {member.username}
                  {member.verified && (
                    <CheckCircle className={tableStyles.verifiedIcon} />
                  )}
                </div>
              </td>
              <td className={tableStyles.bodyCell}>{member.phone}</td>
              <td className={tableStyles.bodyCell}>
                <Button 
                  onClick={() => onViewMember?.(member.id)}
                  className={tableStyles.actionButton}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
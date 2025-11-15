import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";
import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";
import { tableStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface MemberRowProps {
  member: BomMember;
  index: number;
  onViewMember?: (id: number) => void;
  startIndex?: number;
}

export const MemberRow = memo(function MemberRow({ 
  member, 
  index, 
  onViewMember,
  startIndex = 0
}: MemberRowProps) {
  const handleView = useCallback(() => {
    onViewMember?.(member.id);
  }, [member.id, onViewMember]);

  return (
    <tr className={tableStyles.bodyRow}>
      <td className={tableStyles.indexCell}>{startIndex + index + 1}</td>
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
          onClick={handleView}
          className={tableStyles.actionButton}
        >
          {BOM_CONSTANTS.BUTTONS.VIEW}
        </Button>
      </td>
    </tr>
  );
});
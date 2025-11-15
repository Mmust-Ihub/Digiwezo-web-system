import { ErrorBoundary } from "@school-admin/(features)/bom/components/ui/ErrorBoundary";
import { MembersTable } from "@school-admin/(features)/bom/components/ui/MembersTable";
import type { BomMember } from "@school-admin/(features)/bom/types/bomTypes";

interface MembersTableSectionProps {
  members: BomMember[];
  onViewMember: (id: number) => void;
  startIndex?: number;
}

import { BOM_CONSTANTS } from "@school-admin/(features)/bom/constants/bomConstants";

export function MembersTableSection({ members, onViewMember, startIndex = 0 }: MembersTableSectionProps) {
  return (
    <ErrorBoundary fallback={<div className="text-center py-8 text-gray-500">{BOM_CONSTANTS.ERRORS.TABLE_LOAD_ERROR}</div>}>
      <MembersTable 
        members={members}
        onViewMember={onViewMember}
        startIndex={startIndex}
      />
    </ErrorBoundary>
  );
}

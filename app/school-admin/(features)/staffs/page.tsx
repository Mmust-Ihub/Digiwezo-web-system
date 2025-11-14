import { getStaff, getStaffStats } from "@school-admin/(features)/staffs/data/mockStaff";
import { getStaffGroups } from "@school-admin/(features)/staffs/data/mockStaffGroups";
import { StaffPageClient } from "@school-admin/(features)/staffs/components/StaffPageClient";

export default async function StaffsPage() {
  const [staff, stats, groups] = await Promise.all([
    getStaff(),
    getStaffStats(),
    getStaffGroups(),
  ]);

  return (
    <StaffPageClient
      initialStaff={staff}
      initialStats={stats}
      initialGroups={groups}
    />
  );
}


import { StaffGroup } from "@school-admin/(features)/staffs/types/staffGroup";

export const mockStaffGroups: StaffGroup[] = [
  { id: "1", name: "Bursers" },
  { id: "2", name: "Transport Managers" },
  { id: "3", name: "Drivers" },
  { id: "4", name: "Cooks" },
  { id: "5", name: "Matrons" },
  { id: "6", name: "Security" },
  { id: "7", name: "Gardeners" },
];

export const getStaffGroups = async (): Promise<StaffGroup[]> => {
  return Promise.resolve(mockStaffGroups);
};


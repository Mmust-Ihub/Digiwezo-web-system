import { Staff } from "@school-admin/types/staff";

export const mockStaff: Staff[] = [
  {
    id: "1",
    name: "Kagure Kiptoo",
    email: "kagurekiptoo@bookeracademy",
    phone: "0789457326",
    gender: "female",
  },
  {
    id: "2",
    name: "Keruki Hellen",
    email: "kerukihellen@bookeracademy",
    phone: "0729154055",
    gender: "female",
  },
  {
    id: "3",
    name: "Alfred Collins",
    email: "alfredcollins@bookeracademy",
    phone: "0730184572",
    gender: "male",
  },
  {
    id: "4",
    name: "John Mwangi",
    email: "johnmwangi@bookeracademy",
    phone: "0712345678",
    gender: "male",
  },
  {
    id: "5",
    name: "Mary Wanjiku",
    email: "marywanjiku@bookeracademy",
    phone: "0798765432",
    gender: "female",
  },
  {
    id: "6",
    name: "Peter Kamau",
    email: "peterkamau@bookeracademy",
    phone: "0723456789",
    gender: "male",
  },
  {
    id: "7",
    name: "Grace Njeri",
    email: "gracenjeri@bookeracademy",
    phone: "0745678901",
    gender: "female",
  },
  {
    id: "8",
    name: "David Ochieng",
    email: "davidochieng@bookeracademy",
    phone: "0756789012",
    gender: "male",
  },
];

export const getStaff = async (): Promise<Staff[]> => {
  return Promise.resolve(mockStaff);
};

export const getStaffStats = async () => {
  const staff = await getStaff();
  const maleCount = staff.filter((s) => s.gender === "male").length;
  const femaleCount = staff.filter((s) => s.gender === "female").length;
  
  return {
    total: 42,
    male: 27,
    female: 15,
  };
};


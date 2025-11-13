import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";

export const filterMembers = (members: BomMember[], searchQuery: string): BomMember[] => {
  if (!searchQuery.trim()) {
    return members;
  }

  const lowercaseQuery = searchQuery.toLowerCase();

  return members.filter(member =>
    member.name.toLowerCase().includes(lowercaseQuery) ||
    member.username.toLowerCase().includes(lowercaseQuery) ||
    member.phone.includes(searchQuery)
  );
};

export const searchMembersByField = (
  members: BomMember[], 
  field: keyof BomMember, 
  query: string
): BomMember[] => {
  if (!query.trim()) {
    return members;
  }

  const lowercaseQuery = query.toLowerCase();

  return members.filter(member => {
    const fieldValue = member[field];
    if (typeof fieldValue === 'string') {
      return fieldValue.toLowerCase().includes(lowercaseQuery);
    }
    return String(fieldValue).includes(query);
  });
};

export const sortMembersByName = (members: BomMember[]): BomMember[] => {
  return [...members].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortMembersByNameDesc = (members: BomMember[]): BomMember[] => {
  return [...members].sort((a, b) => b.name.localeCompare(a.name));
};
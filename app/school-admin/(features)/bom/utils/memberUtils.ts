import { BomMember } from "@school-admin/(features)/bom/types/bomTypes";

const searchCache = new Map<string, BomMember[]>();

export const filterMembers = (members: BomMember[], searchQuery: string): BomMember[] => {
  const trimmedQuery = searchQuery.trim();
  
  if (!trimmedQuery) {
    return members;
  }

  const cacheKey = `${members.length}-${trimmedQuery}`;
  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey)!;
  }

  const lowercaseQuery = trimmedQuery.toLowerCase();

  const filtered = members.filter(member =>
    member.name.toLowerCase().includes(lowercaseQuery) ||
    member.username.toLowerCase().includes(lowercaseQuery) ||
    member.phone.includes(trimmedQuery)
  );

  if (searchCache.size > 50) {
    const firstKey = searchCache.keys().next().value as string;
    searchCache.delete(firstKey);
  }
  searchCache.set(cacheKey, filtered);

  return filtered;
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

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
] as const;

export const tableHeaders = ["#", "Name", "UserName", "Phone", "Action"] as const;


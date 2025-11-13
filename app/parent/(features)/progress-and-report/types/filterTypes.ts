export interface FilterOption {
  label: string;
  value: string;
}

export interface FiltersData {
  grades: FilterOption[];
  terms: FilterOption[];
}

export interface FiltersProps {
  grade: string;
  term: string;
  handleGradeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleTermChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

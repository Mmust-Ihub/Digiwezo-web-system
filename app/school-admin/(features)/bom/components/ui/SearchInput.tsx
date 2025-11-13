import { Search } from "lucide-react";
import { searchInputStyles } from "@school-admin/(features)/bom/styles/components/componentStyles";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({
  placeholder = "Search by Name", value = "", onChange
}: SearchInputProps) {
  return (
    <div className={searchInputStyles.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          return onChange?.(e.target.value);
        } }
        className={searchInputStyles.input} />
      <div className={searchInputStyles.iconContainer}>
        <Search className={searchInputStyles.icon} />
      </div>
    </div>
  );
}
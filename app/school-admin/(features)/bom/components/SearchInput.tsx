import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchInput = ({ 
  placeholder = "Search by Name", 
  value = "", 
  onChange 
}: SearchInputProps) => {
  return (
    <div className="relative w-[695px]">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full h-[58px] pl-4 pr-12 bg-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};
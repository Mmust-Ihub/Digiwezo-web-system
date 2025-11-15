import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface FormSelectFieldProps {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  isRequired?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function FormSelectField({
  label,
  name,
  options,
  placeholder,
  value,
  onChange,
  error,
  isRequired = false,
  isLoading = false,
  disabled = false,
}: FormSelectFieldProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mb-2">
        <label
          htmlFor={name}
          className="block text-sm md:text-md xl:text-lg 2xl:text-2xl font-medium text-custom-gray">
          {label}
        </label>
        {isRequired && <span className="text-rose-500 text-sm">*</span>}
      </div>

      <Select
        value={value}
        onValueChange={onChange}
        disabled={isLoading || disabled}
        required={isRequired}>
        <SelectTrigger className={error ? "border-rose-500" : ""}>
          <SelectValue
            placeholder={placeholder || `Select ${label.toLowerCase()}`}
          />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && (
        <div className="flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4 text-rose-500" />
          <p className="text-sm lg:text-md text-rose-500">{error}</p>
        </div>
      )}
    </div>
  );
}

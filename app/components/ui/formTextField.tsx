import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

interface FormTextFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  isRequired?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function FormTextField({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  isRequired = false,
  isLoading = false,
  disabled = false,
}: FormTextFieldProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mb-2">
        <label
          htmlFor={name}
          className="block text-sm md:text-md xl:text-lg 2xl:text-2xl font-medium text-[rgba(40,40,40,1)]">
          {label}
        </label>
        {isRequired && <span className="text-red-500 text-sm">*</span>}
      </div>

      <Input
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        disabled={isLoading || disabled}
        required={isRequired}
        className={`w-full ${error ? "border-rose-500" : ""}`}
      />

      {error && (
        <div className="flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4 text-rose-500" />
          <p className="text-sm lg:text-md text-rose-500">{error}</p>
        </div>
      )}
    </div>
  );
}

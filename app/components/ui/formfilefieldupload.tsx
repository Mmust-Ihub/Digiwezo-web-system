import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

interface FormFileFieldProps {
  label: string;
  name: string;
  onChange: (file: File | null) => void;
  error?: string;
  isRequired?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  accept?: string;
}

export default function FormFileField({
  label,
  name,
  onChange,
  error,
  isRequired = false,
  isLoading = false,
  disabled = false,
  accept = "image/jpeg,image/jpg,image/png",
}: FormFileFieldProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

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
        type="file"
        onChange={handleFileChange}
        disabled={isLoading || disabled}
        required={isRequired}
        accept={accept}
        className={`w-full ${error ? "border-red-500" : ""}`}
      />

      {error && (
        <div className="flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <p className="text-sm xl:text-lg text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
}

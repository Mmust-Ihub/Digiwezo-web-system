import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

interface PhoneValue {
  countryCode: string;
  number: string;
}

interface FormPhoneFieldProps {
  label: string;
  name: string;
  value: PhoneValue;
  onChange: (value: PhoneValue) => void;
  error?: string;
  isRequired?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  helperText?: string;
}

export default function FormPhoneField({
  label,
  name,
  value,
  onChange,
  error,
  isRequired = false,
  isLoading = false,
  disabled = false,
}: FormPhoneFieldProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mb-2">
        <label
          htmlFor={name}
          className="block text-sm md:text-md  font-medium text-custom-grey">
          {label}
        </label>
        {isRequired && <span className="text-rose-500 text-sm">*</span>}
      </div>

      <div className="flex gap-2">
        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-custom-grey/10 w-24">
          <span className="text-lg">🇰🇪</span>
          <span className="text-sm lg:text-md  text-custom-grey">
            {value.countryCode}
          </span>
        </div>

        <Input
          id={name}
          name={name}
          type="tel"
          value={value.number}
          onChange={(e) => onChange({ ...value, number: e.target.value })}
          placeholder="712 3## ###"
          disabled={isLoading || disabled}
          required={isRequired}
          className={`flex-1 ${error ? "border-rose-500" : ""}`}
        />
      </div>

      

      {error && (
        <div className="flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <p className="text-sm lg:text-md text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
}

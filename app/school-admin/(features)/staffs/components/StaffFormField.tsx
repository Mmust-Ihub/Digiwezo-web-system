import { Input } from "@/components/ui/input";

interface StaffFormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: "input" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export const StaffFormField = ({
  label,
  name,
  value,
  onChange,
  type = "input",
  required = false,
  placeholder,
  options,
}: StaffFormFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-custom-grey mb-2">
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="flex h-10 lg:h-12 w-full rounded-md text-custom-grey bg-custom-white px-3 py-2 text-sm lg:text-md border border-gray-200 focus:outline-none focus:border-primary"
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};


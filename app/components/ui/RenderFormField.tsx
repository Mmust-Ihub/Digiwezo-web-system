/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

import { Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface FormFieldType {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

interface RenderFormFieldProps {
  field: FormFieldType;
  control: Control<any>;
  isLoading: boolean;
  showLabel:boolean;
}

export default function RenderFormField({
  field,
  control,
  isLoading,
  showLabel,
}: RenderFormFieldProps) {
  return (
    <FormField
      disabled={isLoading}
      control={control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem className="flex flex-col gap-0.5">
          {showLabel && (
            <FormLabel className="text-custom-grey text-sm md:text-md font-semibold ">
              {field.label}
            </FormLabel>
          )}
          <FormControl>
            {field.type === "textarea" ? (
              <Textarea
                placeholder={field.placeholder}
                {...formField}
                className="w-full h-[200px] resize-none "
              />
            ) : (
              <Input
                type={field.type}
                placeholder={field.placeholder}
                {...formField}
                className="w-full placeholder:text-xs  placeholder:md:text-sm placeholder:lg:text-md border border-primary  "
              />
            )}
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
}

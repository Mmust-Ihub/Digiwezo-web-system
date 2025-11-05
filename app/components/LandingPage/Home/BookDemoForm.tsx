"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBookDemo } from "@/hooks/useDemo";
import { useZodForm } from "@/hooks/useZodForm";
import { DemoRequestSchema, fields } from "@/validators/demo-schema-validator";
import { Controller, FormProvider } from "react-hook-form";

export default function BookDemoForm() {
      const { isLoading, handleDemoSubmit, defaultValues } = useBookDemo();

        const form = useZodForm(DemoRequestSchema, {
          defaultValues,
        });
          const {
    control,
    formState: { errors },
  } = form;
  return (
     <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleDemoSubmit)}
            className="flex flex-col gap-2 ">
            {fields.map((field, index) => (
              <Controller
                key={index}
                control={control}
                name={field.name}
                render={({ field: inputField }) => (
                  <div>
                    <Input
                      {...inputField}
                      id={field.name}
                      type={field.type}
                      placeholder={
                        field.type !== "date" ? field.placeholder : undefined
                      }
                      required
                      disabled={isLoading}
                      className="mt-2"
                      {...(field.type === "date"
                        ? { min: new Date().toISOString().split("T")[0] }
                        : {})}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <p className="text-red-400 text-sm mt-1">
                        {
                          (errors[field.name as keyof typeof errors]?.message ||
                            "") as string
                        }
                      </p>
                    )}
                  </div>
                )}
              />
            ))}

            <Button
              type="submit"
              variant="default"
              disabled={isLoading}
              className=" ">
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </FormProvider>
  )
}

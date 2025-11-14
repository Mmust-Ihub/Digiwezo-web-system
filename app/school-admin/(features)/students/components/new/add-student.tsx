"use client";

import { FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useStudentForm } from "../../hooks/useAddStudent";
import { PERSONAL_INFO_FIELDS } from "../../data/student-form";
import DynamicFieldRenderer from "./DynamicFieldRenderer";

export default function AddStudent() {
  const { form, isLoading, submitError, handleSubmit } = useStudentForm();

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit} className="flex flex-col pb-20 gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative">
            {PERSONAL_INFO_FIELDS.map((field) => (
              <DynamicFieldRenderer
                key={field.name}
                field={field}
                control={control}
                errors={errors}
                isLoading={isLoading}
              />
            ))}
          </div>

          {submitError && (
            <div className="bg-rose-50 border border-rose-200 rounded-md">
              <p className="text-rose-600 text-sm">{submitError}</p>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isLoading}>
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors w-1/4">
              {isLoading ? "Saving..." : "Add Student"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

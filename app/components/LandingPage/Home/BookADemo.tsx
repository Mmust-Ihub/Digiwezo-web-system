"use client";

import { Button } from "@/components/ui/button";
import CurvePattern from "@/components/ui/CurvePattern";
import { Input } from "@/components/ui/input";
import { useZodForm } from "@/hooks/useZodForm";
import { BookDemoProp } from "@/interfaces/interface";
import { DemoRequestSchema, fields } from "@/validators/demo-schema-validator";
import Image from "next/image";
import { Controller, FormProvider } from "react-hook-form";

export default function BookADemo({
  onSubmit,
  defaultValues,
  isLoading,
}: BookDemoProp) {
  const form = useZodForm(DemoRequestSchema, {
    defaultValues,
  });

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <section
      className="relative w-screen md:min-h-[95vh] flex-col flex md:flex-row gap-8 px-8 md:px-20 pb-24 justify-center items-center text-custom-white bg-primary "
      id="demo">
      <div className="flex flex-col flex-2 gap-3">
        <h2 className="text-lg md:text-xl font-bold">Book Your Free Demo</h2>
        <p className="text-sm md:text-base">
          Book a demo with us to see our top-rated solutions in action.
        </p>

        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
      </div>

      <div className="flex-3 flex justify-center items-center">
        <Image
          width={600}
          height={600}
          src="/assets/webp/DemoImage.webp"
          alt="Book demo illustration"
          className="object-contain"
        />
      </div>
      <CurvePattern />
    </section>
  );
}

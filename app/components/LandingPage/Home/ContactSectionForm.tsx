import { Button } from "@/components/ui/button";
import RenderFormField from "@/components/ui/RenderFormField";
import { contactFormFields } from "@/data/homepage";
import { useContact } from "@/hooks/useContact";
import { FormProvider } from "react-hook-form";

export default function ContactSectionForm() {
  const { handleSubmit, isSubmitting, form } = useContact();

  return (
    <div className="md:w-2/5 h-11/12 w-full lg:px-20 lg:py-12 p-4 bg-grey-500 justify-center items-center flex ">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full flex flex-col gap-2">
          {contactFormFields.map((field) => (
            <RenderFormField
              showLabel= {false}
              key={field.name}
              field={field}
              control={form.control}
              isLoading={isSubmitting}
            />
          ))}

          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            className={`  ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

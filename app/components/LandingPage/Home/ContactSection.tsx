import ContactSectionInfo from "@/components/LandingPage/Home/ContactSectionInfo";
import ContactSectionForm from "@/components/LandingPage/Home/ContactSectionForm";

export default function ContactSection() {

  return (
    <main className="w-screen lg:h-screen  flex-col flex md:flex-row lg:gap-6 gap-3 lg:px-6 py-6 lg:justify-evenly justify-center items-center bg-grey-300 mt-4 ">
      <ContactSectionInfo />
      <ContactSectionForm/>
     
    </main>
  );
}

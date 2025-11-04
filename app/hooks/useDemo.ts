import { useState } from "react";

interface DemoData {
  name: string;
  email: string;
  phone: string;
  role: string;
  school: string;
  date:string;
}

export function useBookDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues: DemoData = {
    name: "",
    email: "",
    phone: "",
    role: "",
    school: "",
    date:'',
  };

  const handleDemoSubmit = async (data: DemoData) => {
    try {
      setIsLoading(true);
      console.log("Demo request submitted:", data);

      await new Promise((resolve) => setTimeout(resolve, 5000));

      // await fetch("/api/demo-request", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });

      alert("Demo booked successfully!");
    } catch (error) {
      console.error("Error booking demo:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleDemoSubmit,
    defaultValues,
  };
}

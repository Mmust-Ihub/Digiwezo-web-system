"use client";

import { Button } from "@/components/ui/button";

export default function WhoWeAreSection() {
  return (
    <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start py-12">
      <div>
        <h3 className="text-3xl font-bold">
          WHO <span className="text-primary">WE</span> ARE?
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We are a platform dedicated to empowering students and advancing learning
          experiences through structured educational tools, resources, and community.
        </p>
        <Button  variant="outline" className="mt-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          Read More
        </Button>
      </div>

      <div className="text-right">
        <h3 className="text-3xl font-bold">
          WHAT <span className="text-primary">WE</span> DO?!
        </h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We provide learning support, mentorship, and collaboration tools
          designed to enhance academic growth and innovation.
        </p>
        <Button  variant="outline" className="mt-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
          Read More
        </Button>
      </div>
    </section>
  );
}

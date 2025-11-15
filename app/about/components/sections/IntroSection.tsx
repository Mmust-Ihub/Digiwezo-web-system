"use client";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <section className="py-16 container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
        Your Gateway to Educational <br/>
        Excellence with{" "}
        <span className="text-foreground">Dijiwezo</span>
      </h2>

      <Button className="mt-8 bg-primary text-slate hover:bg-primary/90 px-8 py-3 rounded-none transition font-semibold">
        ▦ Dashboard
      </Button>
    </section>
  );
}

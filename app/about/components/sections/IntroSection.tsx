"use client";

import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <section className="py-16 container mx-auto px-6 text-center max-w-4xl">
      <h2 className="text-4xl font-bold leading-snug">
        Your Gateway to Educational Excellence with{" "}
        <span className="text-[var(--color-primary)]">Dijiwezo</span>
      </h2>

      <Button className="mt-6 bg-primary text-white hover:bg-dark-blue px-6 py-2 rounded-md transition">
        Dashboard
      </Button>
    </section>
  );
}

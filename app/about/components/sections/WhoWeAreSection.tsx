"use client";

import { Button } from "@/components/ui/button";

export default function WhoWeAreSection() {
  return (
    <section className="w-full px-6 py-16">
      <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-foreground">WHO</span>
            <span className="block text-primary">WE</span>
            <span className="block text-foreground">ARE?</span>
          </h3>
        </div>

        <div className="order-2 md:order-2 flex flex-col items-center">
          <p className="text-foreground leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lobortis purus eget tortor adipiscing posuere vehicula. Sit sagittis quam mi auctor egestas in mauris gravida. Id etiam ultrices ipsum congue tristique nisl sed. Pellentesque dignissim sed diam auctor. Mi commodo molestie euismod imperdiet.
          </p>
          <div className="mt-6">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:text-primary px-6 py-2 rounded-none">
              Read More
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
        <div className="order-1 md:order-1 flex flex-col items-center">
          <p className="text-foreground leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lobortis purus eget tortor adipiscing posuere vehicula. Sit sagittis quam mi auctor egestas in mauris gravida. Id etiam ultrices ipsum congue tristique nisl sed. Pellentesque dignissim sed diam auctor. Mi commodo molestie euismod imperdiet.
          </p>
          <div className="mt-6">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:text-primary px-6 py-2 rounded-none">
              Read More
            </Button>
          </div>
        </div>

        <div className="order-2 md:order-2 text-right">
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-foreground">WHAT</span>
            <span className="block text-primary">WE</span>
            <span className="block text-foreground">DO?!</span>
          </h3>
        </div>
      </div>
      </div>
    </section>
  );
}


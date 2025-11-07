import Image from "next/image";

export default function TeamMemberCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="group w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-md hover:shadow-2xl bg-[var(--color-card)] text-[var(--color-card-foreground)] transition-all duration-500 transform hover:-translate-y-2 border border-[var(--color-border)]/30">
      
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      </div>

      <div className="p-5 text-center bg-[var(--color-background)]">
        <h4 className="text-xl font-bold text-[var(--color-foreground)] tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {name}
        </h4>
        <p className="text-sm mt-1 text-[var(--color-muted-foreground)] italic">
          {role}
        </p>

        <div className="mt-3 mx-auto w-10 h-[2px] bg-[var(--color-primary)] rounded-full group-hover:w-16 transition-all duration-500"></div>
      </div>
    </div>
  );
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
}: {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}) {
  const align = alignment === "left" ? "text-left" : alignment === "right" ? "text-right" : "text-center";

  return (
    <div className={`mb-10 ${align}`}>
      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

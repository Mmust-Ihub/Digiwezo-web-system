export default function CurvePattern({
  fillColor = "custom-white",
  height = 120,
}: {
  fillColor?: string;
  height?: number;
}) {
  const midPoint = height / 2;
  const viewBoxHeight = height;

  const heightClass =
    height <= 80
      ? "h-20"
      : height <= 100
      ? "h-24"
      : height <= 120
      ? "h-32"
      : height <= 150
      ? "h-40"
      : "h-48";

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
      <svg
        className={`relative block w-full ${heightClass}`}
        viewBox={`0 0 1440 ${viewBoxHeight}`}
        preserveAspectRatio="none">
        <path
          d={`M0,${midPoint} C240,0 480,0 720,${midPoint} C960,${viewBoxHeight} 1200,${viewBoxHeight} 1440,${midPoint} L1440,${viewBoxHeight} L0,${viewBoxHeight} Z`}
          fill={`var(--color-${fillColor})`}
        />
      </svg>
    </div>
  );
}

"use client";

export default function CalendarSection({ size }: { size?: "small" | "large" }) {
  const month = { name: "November", year: 2025, days: 30, start: 6 }; 

  return (
    <div className="flex justify-center mt-6">
      <Calendar {...month} size={size} />
    </div>
  );
}

function Calendar({
  name,
  year,
  days,
  start,
  size = "small",
}: {
  name: string;
  year: number;
  days: number;
  start: number;
  size?: "small" | "large";
}) {
  const weeks: (number | string)[][] = [];
  let day = 1 - start;

  for (let i = 0; i < 6; i++) {
    const week: (number | string)[] = [];
    for (let j = 0; j < 7; j++) {
      week.push(day > 0 && day <= days ? day : "");
      day++;
    }
    weeks.push(week);
  }

  const cardClasses =
    size === "large"
      ? "bg-white p-6 rounded-xl shadow-md w-full max-w-[400px]"
      : "bg-white p-4 rounded-xl shadow-md w-80";

  return (
    <div className={cardClasses}>
      <div className="text-center mb-3">
        <h3 className="text-lg font-semibold text-custom">
          {name} {year}
        </h3>
      </div>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr>
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <th key={d} className="text-custom-grey text-sm py-1 font-medium">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((row, i) => (
            <tr key={i}>
              {row.map((d, j) => (
                <td
                  key={j}
                  className={`py-2 text-sm rounded-lg ${
                    d ? "text-custom-grey hover:bg-primary cursor-pointer" : "text-transparent"
                  }`}
                >
                  {d}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

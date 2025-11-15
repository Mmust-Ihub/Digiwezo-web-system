"use client";

import { calendarMonth } from "@school-admin/data/dashboardData";
import { CalendarMonth, CalendarSize } from "@school-admin/types/dashboardTypes";
import { useCalendar } from "@school-admin/hooks/useCalendar";

export default function CalendarSection({ size }: { size?: CalendarSize }) {
  return (
    <div className="flex justify-center mt-6">
      <Calendar month={calendarMonth} size={size} />
    </div>
  );
}

function Calendar({
  month,
  size = "small",
}: {
  month: CalendarMonth;
  size?: CalendarSize;
}) {
  const { name, year, weeks } = useCalendar(month);

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
              <th
                key={d}
                className="text-custom-grey text-sm py-1 font-medium"
              >
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
                    d
                      ? "text-custom-grey hover:bg-primary cursor-pointer"
                      : "text-transparent"
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

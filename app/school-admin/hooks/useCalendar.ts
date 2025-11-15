import { CalendarMonth } from "@school-admin/types/dashboardTypes";

export function useCalendar(month: CalendarMonth) {
  const { name, year, days, start } = month;

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

  return {
    name,
    year,
    weeks,
  };
}

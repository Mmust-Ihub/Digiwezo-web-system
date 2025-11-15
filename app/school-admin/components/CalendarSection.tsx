"use client";

import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { calendarMonth } from "@school-admin/data/dashboardData";
import { CalendarMonth, CalendarSize } from "@school-admin/types/dashboardTypes";

export default function CalendarSection({ size }: { size?: CalendarSize }) {
  const { name, year } = calendarMonth;

  // Create a Date object for the month you want to display
  const monthDate = new Date(`${name} 1, ${year}`);

  const wrapperClass =
    size === "large"
      ? "bg-white p-6 rounded-xl shadow-md w-full max-w-[800px]"
      : "bg-white p-4 rounded-xl shadow-md w-80";

  return (
    <div className="flex justify-center mt-6">
      <div className={wrapperClass}>
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-custom">
            {name} {year}
          </h3>
        </div>

        <ReactCalendar
          view="month"
          // Always show THIS month only
          activeStartDate={monthDate}
          // Prevent navigating to other months
          onActiveStartDateChange={() => {}}
          prevLabel={null}
          nextLabel={null}
          // Disable selecting days (display only)
          onChange={() => {}}
          // Style days outside current month
          tileClassName={({ date, view }) => {
            if (view === "month") {
              if (date.getMonth() !== monthDate.getMonth()) {
                return "text-transparent pointer-events-none";
              }
            }
            return "";
          }}
        />
      </div>
    </div>
  );
}

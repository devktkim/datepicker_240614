"use client";

// components/DatePicker.tsx
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";
import styles from "./datepicker.module.css";

// 한국어 로케일 등록
//registerLocale("ko", ko);

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className={`bg-white p-4 rounded-lg shadow-lg ${styles.datepicker}`}>
        <label
          htmlFor="date"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          날짜 선택
        </label>
        <DatePicker
          id="date"
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          locale="ko"
          dateFormat="yyyy-MM-dd"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholderText="날짜를 선택하세요"
          popperClassName={styles.datepicker} // Use custom styles for the popper (calendar)
          calendarClassName={styles.datepicker} // Use custom styles for the calendar
          dayClassName={() => styles.day} // Use custom styles for each day
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className={styles.header}>
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"<"}
              </button>
              <span>{format(date, "yyyy-MM")}</span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {">"}
              </button>
            </div>
          )}
        />
        {selectedDate && (
          <div className="mt-4 text-center">
            <span className="text-gray-700">
              선택된 날짜: {format(selectedDate, "yyyy-MM-dd")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;

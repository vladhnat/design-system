"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CalendarSelectGroup } from "@/components/ui/calendar-select-group"
import { CalendarButton } from "@/components/ui/calendar-button"

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  month?: number
  year?: number
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      className,
      month: initialMonth,
      year: initialYear,
      selectedDate,
      onDateSelect,
      ...props
    },
    ref
  ) => {
    const today = new Date()
    const [currentMonth, setCurrentMonth] = React.useState(
      initialMonth ?? today.getMonth()
    )
    const [currentYear, setCurrentYear] = React.useState(
      initialYear ?? today.getFullYear()
    )
    const [selected, setSelected] = React.useState<Date | undefined>(
      selectedDate
    )

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const getDaysInMonth = (month: number, year: number) => {
      return new Date(year, month + 1, 0).getDate()
    }

    const getFirstDayOfMonth = (month: number, year: number) => {
      return new Date(year, month, 1).getDay()
    }

    const handlePreviousMonth = () => {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    }

    const handleNextMonth = () => {
      if (currentMonth === 11) {
        setCurrentMonth(0)
        setCurrentYear(currentYear + 1)
      } else {
        setCurrentMonth(currentMonth + 1)
      }
    }

    const handleDateClick = (day: number) => {
      const date = new Date(currentYear, currentMonth, day)
      setSelected(date)
      onDateSelect?.(date)
    }

    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const days: (number | null)[] = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    // Add days from next month to fill the grid
    const totalCells = 42 // 6 rows * 7 days
    const remainingCells = totalCells - days.length
    for (let day = 1; day <= remainingCells; day++) {
      days.push(day)
    }

    const isSelected = (day: number | null) => {
      if (!day || !selected) return false
      return (
        selected.getDate() === day &&
        selected.getMonth() === currentMonth &&
        selected.getFullYear() === currentYear
      )
    }

    const isCurrentMonth = (day: number | null, index: number) => {
      return index >= firstDay && index < firstDay + daysInMonth
    }

    const isToday = (day: number | null) => {
      if (!day) return false
      const date = new Date(currentYear, currentMonth, day)
      return date.toDateString() === today.toDateString()
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 items-center p-4 rounded-2xl border border-[#d9d9d9] bg-[#ffffff]",
          className
        )}
        {...props}
      >
        {/* Header with navigation */}
        <div className="flex gap-4 items-center w-full">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handlePreviousMonth}
            className="h-8 w-8 rounded-full p-2"
          >
            <ChevronLeft className="h-5 w-5 text-[#1e1e1e]" />
          </Button>
          <CalendarSelectGroup
            month={monthNames[currentMonth]}
            year={currentYear}
            onMonthChange={(month) => {
              const monthIndex = monthNames.indexOf(month)
              if (monthIndex >= 0) setCurrentMonth(monthIndex)
            }}
            onYearChange={(year) => setCurrentYear(parseInt(year))}
            className="flex-1"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleNextMonth}
            className="h-8 w-8 rounded-full p-2"
          >
            <ChevronRight className="h-5 w-5 text-[#1e1e1e]" />
          </Button>
        </div>

        {/* Days of week header */}
        <div className="flex gap-px items-center justify-center w-full">
          {weekDays.map((day) => (
            <div
              key={day}
              className="flex-1 flex items-center justify-center text-xs font-normal leading-5 text-[#757575] text-center"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="flex flex-col gap-px">
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-px items-center">
              {days.slice(rowIndex * 7, (rowIndex + 1) * 7).map((day, dayIndex) => {
                const index = rowIndex * 7 + dayIndex
                const inCurrentMonth = isCurrentMonth(day, index)
                const selectedDay = isSelected(day)

                let state: "Default" | "Active" | "Disabled" | "Hidden" = "Default"
                if (!day) {
                  state = "Hidden"
                } else if (!inCurrentMonth) {
                  state = "Disabled"
                } else if (selectedDay) {
                  state = "Active"
                }

                return (
                  <CalendarButton
                    key={dayIndex}
                    number={day ?? undefined}
                    state={state}
                    onClick={() => day && inCurrentMonth && handleDateClick(day)}
                    className={cn(
                      !inCurrentMonth && "text-[#b3b3b3]",
                      selectedDay && "bg-[#2c2c2c] text-[#f5f5f5]"
                    )}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  }
)
Calendar.displayName = "Calendar"

export { Calendar }


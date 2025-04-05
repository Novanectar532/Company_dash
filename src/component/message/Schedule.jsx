import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Users } from "lucide-react";

export default function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [calendar, setCalendar] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([
    "Interview Schedule",
    "Meeting",
  ]);

  const [categories, setCategories] = useState([
    "Interview Schedule",
    "Meeting",
    "Team Schedule",
    "My Task",
    "Reminders",
  ]);

  const [newCategory, setNewCategory] = useState("");

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  // useEffect(() => {
  //   const today = new Date();
  //   setSelectedDate(today.getDate());
  //   // setCurrentDay(today.getDate());
  //   const year = today.getFullYear();
  //   const month = today.getMonth();
  //   const firstDay = new Date(year, month, 1).getDay();
  //   const totalDays = new Date(year, month + 1, 0).getDate();

  //   setCurrentMonth(`${monthNames[month]} ${year}`);

  // }, []);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

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
    ];

    setSelectedDate(date.getDate());
    setCurrentMonth(`${monthNames[month]} ${year}`);

    const weeks = [];
    let week = new Array(7).fill(null);
    let day = 1;

    for (let i = firstDay; i < 7; i++) {
      week[i] = day++;
    }
    weeks.push(week);

    while (day <= totalDays) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7 && day <= totalDays; i++) {
        week[i] = day++;
      }
      weeks.push(week);
    }

    setCalendar(weeks);
  };

  const goToPreviousMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const [view, setView] = useState("week");

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };


  const dates = Array(7)
    .fill(null)
    .map((_, i) => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - currentDate.getDay() + i);
      return date;
    });


  const hours = Array(12)
    .fill(null)
    .map((_, i) => i + 1);


  const events = [
    {
      id: 1,
      title: "Interview session with Kathryn Murphy",
      startTime: "02:00 AM",
      endTime: "05:00 AM",
      day: 1, 
      color: "bg-sky-500",
      attendees: 2,
    },
    {
      id: 2,
      title: "Interview session",
      startTime: "08:00 AM",
      endTime: "09:00 AM",
      day: 1, 
      color: "bg-sky-500",
      attendees: 0,
    },
    {
      id: 3,
      title: "Meeting with stakeholders",
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      day: 3,
      color: "bg-emerald-500",
      attendees: 0,
    },
  ];


  const specialDays = [
    {
      day: 4,
      status: "Holiday",
      color: "bg-red-500",
    },
  ];


  const getEvent = (day, hour) => {
    return events.find((event) => {
      const startHour = parseInt(event.startTime.split(":")[0]);
      const endHour = parseInt(event.endTime.split(":")[0]);
      return event.day === day && hour >= startHour && hour < endHour;
    });
  };


  const isSpecialDay = (day) => {
    return specialDays.find((specialDay) => specialDay.day === day);
  };

 
  const formatDate = (date) => {
    return date.getDate().toString().padStart(2, "0");
  };


  const formatDay = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  };

  const isToday = (date) => {
    return (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <div className="flex w-full">

      <div className="flex-1 px-2 mx-auto">
        <div className="flex flex-col p-4 ">
          <div className="flex items-center justify-between md:px-5">
            <div className="flex md:gap-18 gap-3">
              <h2 className="text-lg font-semibold">My Schedule</h2>
              <button variant="outline" className="text-blue-600">
                Today
              </button>
            </div>
            <div className="flex items-center gap-2">
              <ChevronLeft
                className="cursor-pointer"
                onClick={goToPreviousMonth}
              />
              <span className="text-gray-700 font-medium">{currentMonth}</span>
              <ChevronRight
                className="cursor-pointer"
                onClick={goToNextMonth}
              />
            </div>
            <div className="lg:flex gap-4 hidden  ">
              <button
                className={`text-gray-500 cursor-pointer ${
                  view === "day"
                    ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
                onClick={() => setView("day")}
              >
                Day
              </button>
              <button
                className={`text-gray-500 cursor-pointer ${
                  view === "week"
                    ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
                onClick={() => setView("week")}
              >
                Week
              </button>
              <button
                className={`text-gray-500 cursor-pointer ${
                  view === "month"
                    ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                    : ""
                }`}
                onClick={() => setView("month")}
              >
                Month
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center ">
          <div className="w-full lg:w-1/2">
            <div className="  rounded-xl p-4 md:pt-8 shadow-md bg-white ">
              <button className="w-full flex items-center justify-center gap-2 mb-4 text-blue-600 border rounded-lg border-blue-500">
                <Plus size={16} /> Create Event
              </button>
              <div className="flex justify-between items-center mb-4  ">
                <h2 className="text-lg font-semibold">{currentMonth}</h2>
                <div className="flex gap-2">
                  <ChevronLeft
                    className="cursor-pointer"
                    onClick={goToPreviousMonth}
                  />
                  <ChevronRight
                    className="cursor-pointer"
                    onClick={goToNextMonth}
                  />
                </div>
              </div>
              <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day} className="text-xs font-medium">
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendar.flat().map((day, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
                      selectedDate === day
                        ? "bg-blue-600 text-white"
                        : currentDay === null
                        ? ""
                        : "text-gray-900 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="  rounded-xl p-4  shadow-md bg-white mt-4">
              <div className="flex justify-between items-center mb-2 ">
                <h3 className="text-gray-700 font-semibold">Categories</h3>

                <button
                  className="text-blue-600 text-sm font-medium hover:underline cursor-pointer "
                  onClick={handleEdit}
                >
                  {isEditing ? "clos" : "Add Category"}
                </button>
              </div>
              <div className="space-y-2">
                {isEditing && (
                  <>
                    <input
                      type="text"
                      value={newCategory}
                      onChange={handleChange}
                      placeholder="Add new category"
                    />
                    <button onClick={handleAddCategory} className=" mx-5">
                      Add
                    </button>
                  </>
                )}

                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span
                      className={`${
                        selectedCategories.includes(category)
                          ? "text-blue-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* {schedule meeting} */}
          <div>
            <div className="container mx-auto p-4 ">
              <div className="flex  items-center mb-4">
                <div className="flex gap-4 lg:hidden ">
                  <button
                    className={`text-gray-500 cursor-pointer ${
                      view === "day"
                        ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                        : ""
                    }`}
                    onClick={() => setView("day")}
                  >
                    Day
                  </button>
                  <button
                    className={`text-gray-500 cursor-pointer ${
                      view === "week"
                        ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                        : ""
                    }`}
                    onClick={() => setView("week")}
                  >
                    Week
                  </button>
                  <button
                    className={`text-gray-500 cursor-pointer ${
                      view === "month"
                        ? "font-semibold text-blue-600 border-b-2 border-blue-600"
                        : ""
                    }`}
                    onClick={() => setView("month")}
                  >
                    Month
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className=" ">
                  {/* Days of the week */}
                  <div className="grid grid-cols-8 border-b">
                    <div className="p-1 text-center font-medium text-gray-500">
                      GMT +5:30
                    </div>
                    {dates.map((date, index) => {
                      const special = isSpecialDay(index);
                      return (
                        <div
                          key={index}
                          className={`p-1 text-center ${
                            special ? "bg-red-50" : ""
                          }`}
                        >
                          <div className="text-sm text-gray-500 mb-1">
                            {formatDay(date)}
                          </div>
                          <div
                            className={`
                    inline-flex justify-center items-center  rounded-full p-2 w-10 h-10
                    ${isToday(date) ? "bg-indigo-600 text-white" : ""}
                  `}
                          >
                            {formatDate(date)}
                          </div>
                          {special && (
                            <div
                              className={`mt-1 text-xs text-white ${special.color} rounded-sm px-1`}
                            >
                              {special.status}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Calendar grid */}
                  {hours.map((hour, hourIndex) => (
                    <div key={hourIndex} className="grid grid-cols-8 border-b">
                      {/* Time column */}
                      <div className="p-1 text-center text-sm text-gray-500 border-r">
                        {hour} AM
                      </div>

                      {/* Days columns */}
                      {Array(7)
                        .fill(null)
                        .map((_, dayIndex) => {
                          const event = getEvent(dayIndex, hour);
                          const special = isSpecialDay(dayIndex);
                          const isFirstHourOfEvent =
                            event &&
                            parseInt(event.startTime.split(":")[0]) === hour;

                          return (
                            <div
                              key={dayIndex}
                              className={`border-r min-h-[60px] ${
                                special ? "bg-red-50" : ""
                              }`}
                            >
                              {isFirstHourOfEvent && (
                                <div
                                  className={`${event.color} text-white p-2 h-full`}
                                  style={{
                                    height: `${
                                      (parseInt(event.endTime.split(":")[0]) -
                                        parseInt(
                                          event.startTime.split(":")[0]
                                        )) *
                                      60
                                    }px`,
                                  }}
                                >
                                  <div className="text-sm font-medium">
                                    {event.title}
                                  </div>
                                  <div className="text-xs mt-1">
                                    {event.startTime} - {event.endTime}
                                  </div>
                                  {event.attendees > 0 && (
                                    <div className="flex items-center mt-2">
                                      <div className="relative flex -space-x-2">
                                        <div className=" rounded-full bg-white/30 flex items-center justify-center">
                                          <Users className="w-4 h-4" />
                                        </div>
                                        {event.attendees > 1 && (
                                          <div className=" rounded-full bg-white/30 flex items-center justify-center">
                                            <Users className="" />
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

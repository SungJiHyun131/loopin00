import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ScheduleCalendar.css';

const ScheduleCalendar = () => { // ✅ 이름만 바꿨음
  const [date, setDate] = useState(new Date());

  const events = {
    '2025-07-02': '인기가요 사전 녹화',
    '2025-07-12': '팬미팅',
    '2025-07-26': '뮤직뱅크'
  };

  const formatDate = (d) => d.toISOString().split('T')[0];

  return (
    <div className="wrap">
    <p className='subtitle'>Schedule</p>
    <div className="calendar-container">
      <Calendar
      locale="en-US"
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const key = formatDate(date);
          return events[key] ? <div className="dot"></div> : null;
        }}
        tileClassName={({ date }) => {
          const key = formatDate(date);
          if (key === formatDate(new Date())) return 'today';
          if (key === formatDate(date)) return 'selected';
          return null;
        }}
        prevLabel="<"
        nextLabel=">"
        prev2Label={null} 
        next2Label={null} 
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2)
        }
        showNeighboringMonth={false}
      />

      {events[formatDate(date)] && (
        <div className="event">
          <span className="dot-text">• {events[formatDate(date)]}</span>
        </div>
      )}
    </div>
    </div>
  );
};

export default ScheduleCalendar; // ✅ export도 이름 변경
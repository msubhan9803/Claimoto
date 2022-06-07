import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker"

function Calender() {
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <React.Fragment>
            <div class="p-0 mt-30">
                <Calendar
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                    calendarClassName="calender-custom-class"
                />
            </div>
        </React.Fragment>
    )
}

export default Calender;
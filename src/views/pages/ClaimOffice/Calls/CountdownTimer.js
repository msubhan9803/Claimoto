import React from 'react';
import { useCountdown } from 'hooks/useCountdown';


const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown_danger' : 'countdown'}>
            {/* <p> */}
            <h3>{value}</h3>
            {/* </p> */}
            {/* <span>{type}</span> */}
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            {/* <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p> */}
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <h3>:</h3>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={minutes < 1 && seconds < 15} />
        </div>
    );
};

const CountdownTimer = ({ targetDate, leaveMeeting, toggleTimmer }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate, toggleTimmer);

    if (days + hours + minutes + seconds <= 0) {
        // leaveMeeting();
        return "Time Over";
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
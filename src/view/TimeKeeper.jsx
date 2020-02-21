import React, { useState } from 'react';
import TimeKeeper from 'react-timekeeper';


function TimeComponent(props){
    const [time, setTime] = useState(props.pass.user.time)
    const [showTime, setShowTime] = useState(false)

    return (
        <div>
            {showTime &&
            <TimeKeeper
                time={time}
                onChange={(newTime) => setTime(newTime.formatted12)}
                onDoneClick={() => setShowTime(false)}
                switchToMinuteOnHourSelect

            />
            }
            <span>Time is {time}</span>
            {!showTime &&
            <button onClick={() => setShowTime(true)}>Show</button>
            }
        </div>
    )

}

export default TimeComponent;

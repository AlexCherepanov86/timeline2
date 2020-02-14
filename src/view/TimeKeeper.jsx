import React, { useState } from 'react';
import TimeKeeper from 'react-timekeeper';
import {connect} from "react-redux";

function TimeComponent(){
    const [time, setTime] = useState('12:30pm')
    const [showTime, setShowTime] = useState(true)

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

const mapStateToProps = store => {
    return {
        user: store.user
    }
}

const connectedTimeComponent = connect(mapStateToProps)(TimeComponent);
export default connectedTimeComponent;

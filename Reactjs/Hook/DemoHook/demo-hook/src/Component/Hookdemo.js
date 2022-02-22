import React from 'react';
import useClock from '../Hook/useClock';

const Hookdemo = () => {

    const [ampm, time] = useClock();
    return (
        <div>
            <div>{time}</div>
            <span>{ampm}</span>
        </div>
    );
}

export default Hookdemo;

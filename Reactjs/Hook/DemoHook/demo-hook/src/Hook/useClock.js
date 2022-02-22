import  { useState } from 'react';

const useClock = () => {
    const [time, settime] = useState("");
    const [ampm, setampm] = useState("");

    //function cap nhap thoi gian
    const updateTime = function ()  {
        let dateInfo = new Date();
        let hour = 0;
        // lay gio
        if (dateInfo.getHours() === 0) {
            hour = 12;
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() -12;
        }else {
            hour = dateInfo.getHours();
        }

        // lay gia tri cua phut
        let minutes =dateInfo.getMinutes();

        // lay gia tri cua giay
        let seconds = dateInfo.getSeconds();

        // dinh dang ngay 

         let ampm = dateInfo.getHours() >=12 ? "pm" : "am";

        setampm(ampm);
        settime(`${hour} : ${minutes}  : ${seconds}`)


    }

    setInterval(() => {
        updateTime();
    }, 1000);
    
    return [ampm, time];
}

export default useClock;

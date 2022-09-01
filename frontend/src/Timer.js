import React from 'react'
import { useEffect, useState } from "react";


function Timer() {

    const calculateTimeLeft = () => {
        const difference = +new Date("2022-09-15T18:30:17+01:00") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });


  return (
    <div>
        {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <span>{timeLeft.hours}</span>
          <span>:</span>
          <span>{timeLeft.minutes}</span>
          <span>:</span>
          <span>{timeLeft.seconds}</span>
        </p>
      ) : (
        <p>L'offre est expirée</p>
      )}
    </div>
  )
}

export default Timer
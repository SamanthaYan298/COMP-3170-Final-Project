import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ releaseDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = new Date(releaseDate).getTime() - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval); 
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, [releaseDate]);

  return (
    <div style={{ textAlign: 'center', margin: '10px 0', fontSize: '18px', fontWeight: 'bold', color: '#d9d1ff' }}>
      <h3>Countdown to Movie Release</h3>
      <div>
        <span>{timeRemaining.days} Days</span> :
        <span>{timeRemaining.hours} Hours</span> :
        <span>{timeRemaining.minutes} Minutes</span> :
        <span>{timeRemaining.seconds} Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

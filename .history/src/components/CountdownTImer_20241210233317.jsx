import React, { useState, useEffect } from 'react';

// Countdown Timer component
const CountdownTimer = ({ releaseDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = new Date(releaseDate).getTime() - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval); // Stop the countdown if the release date is reached
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [releaseDate]);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '24px', fontWeight: 'bold' }}>
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

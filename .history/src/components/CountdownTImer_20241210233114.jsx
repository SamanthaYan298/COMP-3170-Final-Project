import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ releaseDate }) => {
  // Ensure releaseDate is provided, if not, return a default message
  if (!releaseDate) {
    return <div>No release date provided!</div>;
  }

  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const countdown = setInterval(() => {
      const timeDifference = new Date(releaseDate) - new Date();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (timeDifference < 0) {
        clearInterval(countdown);
        setTimeRemaining('The movie is out!');
      }
    }, 1000);

    return () => clearInterval(countdown); // Clean up on component unmount
  }, [releaseDate]);

  return <div>Countdown: {timeRemaining}</div>;
};

export default CountdownTimer;

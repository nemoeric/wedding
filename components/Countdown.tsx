"use client"
import {
  useState,
  useEffect,
} from "react";

const Countdown = ({ date }: { date: Date }) => {
  const [now, setNow]     = useState(new Date());
  const [end, setEnd]     = useState(new Date(date));
  const [diff, setDiff]   = useState(end.getTime() - now.getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("tick");
      
      setNow(new Date());
      setDiff(end.getTime() - now.getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [end, now]);

  // Calcul de la différence en jours, heures, minutes et secondes
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);


  const valueStyleDays = { "--value": days } as React.CSSProperties; // Conversion de type explicite
  const valueStyleHours = { "--value": hours } as React.CSSProperties; // Conversion de type explicite
  const valueStyleMinutes = { "--value": minutes } as React.CSSProperties; // Conversion de type explicite
  const valueStyleSeconds = { "--value": seconds } as React.CSSProperties; // Conversion de type explicite

  return (
    <div className="flex gap-5 font-sans justify-center text-center">
      <div className="flex flex-col">
        <span className="countdown text-4xl">
          <span style={valueStyleDays}></span>
        </span>
        jours
      </div>
      <div className="flex flex-col">
        <span className="countdown text-4xl">
          <span style={valueStyleHours}></span>
        </span>
        heures
      </div>
      <div className="flex flex-col">
        <span className="countdown text-4xl">
          <span style={valueStyleMinutes}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown text-4xl">
          <span style={valueStyleSeconds}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;

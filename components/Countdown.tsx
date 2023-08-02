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
      <div className="flex gap-1">
        <span className="countdown text-xl">
          <span style={valueStyleDays}></span>
        </span>
        j
      </div>
      <div className="flex gap-1">
        <span className="countdown text-xl">
          <span style={valueStyleHours}></span>
        </span>
        h
      </div>
      <div className="flex gap-1">
        <span className="countdown text-xl">
          <span style={valueStyleMinutes}></span>
        </span>
        m
      </div>
      <div className="flex gap-1">
        <span className="countdown text-xl">
          <span style={valueStyleSeconds}></span>
        </span>
        s
      </div>
    </div>
  );
};

export default Countdown;

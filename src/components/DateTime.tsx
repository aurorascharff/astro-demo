import React, { useEffect, useState } from "react";

export default function DateTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time: {time}</p>
    </div>
  );
}

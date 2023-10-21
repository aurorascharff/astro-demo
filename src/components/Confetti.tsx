import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export default function ReactCounter() {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => setIsExploding(true)}>Explode</button>
      {isExploding && <ConfettiExplosion />}
    </div>
  );
}

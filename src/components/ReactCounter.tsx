import React, { useState } from "react";

type Props = {
  initialCount: number;
};

export default function ReactCounter({ initialCount = 0 }: Props) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex flex-col gap-2">
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col gap-2">
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

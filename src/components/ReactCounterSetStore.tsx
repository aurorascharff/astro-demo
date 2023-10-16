import React from "react";
import { useStore } from "@nanostores/react";
import { $counter } from "../js/counterStore";

export default function ReactCounterSetStore() {
  const count = useStore($counter);

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => $counter.set(count + 1)}>Increment</button>
    </div>
  );
}

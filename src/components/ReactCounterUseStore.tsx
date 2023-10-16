import React from "react";
import { useStore } from "@nanostores/react";
import { $counter } from "../js/counterStore";

export default function ReactCounterUseStore() {
  const count = useStore($counter);

  return (
    <div className="flex flex-col gap-2">
      <p>Count: {count}</p>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";

export const UseRefHookOne = () => {
  const count = useRef(0);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input type={"text"} onChange={(e) => setInputValue(e.target.value)} />
      <h1>Count: {count.current}</h1>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";

export const UseRefHookTwo = () => {
  let inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
  const ChangeName = () =>{
      console.log(inputRef.current.value)
      inputRef.current.focus()
  }
  return (
    <div>
      <input type={"text"} ref={inputRef} />
      <button onClick={()=>ChangeName()}>Change Name</button>
    </div>
  );
};

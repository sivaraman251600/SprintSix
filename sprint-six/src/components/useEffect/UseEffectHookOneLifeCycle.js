import React, { useEffect, useState } from "react";

export const UseEffectHookOne = () => {
  const [age, setAge] = useState(0);
//  useEffect(() => {
//    console.log(
//     "Hai This is an Initial Render, Function Component LifeCycle(component Did Mount)"
//    );
//  },[]);

  useEffect(() => {
    var interval = setInterval(handleClick,1000)
    console.log(
      "Hai This Function Component LifeCycle,(Component Update)"
    );
    return () => {
      clearInterval(interval)
      console.log(
        "Hai This Function Component LifeCycle,(Component Will Unmount)"
      );
    };
  },[]);

  const handleClick = () => {
    setAge(age=> age+ 1);
  };
  return (
    <div>
      <>{age}</>
    </div>
  );
};

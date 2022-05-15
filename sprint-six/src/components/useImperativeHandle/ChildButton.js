import React, { forwardRef, useImperativeHandle, useState } from "react";

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

  useImperativeHandle(ref, () => ({
    changeToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button onClick={() => ref.current.changeToggle()}>Child</button>
      <br />
      {toggle && <span>This Is Toggle</span>}
    </div>
  );
});

export default ChildButton;

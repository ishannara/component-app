import React, { useRef } from "react";

function UseRef() {
  const ref = useRef(0);

  function handleClick() {
    console.log(ref, "hello");
    ref.current.focus();
    console.log(ref.current.value);
    ref.current.style.display = "ishan"
    // ref.current.style.color = "blue"
    // ref.current.style.display = "none"
  }

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>useRef</h1>
        <input
          ref={ref}
          type="text"
          placeholder="Add Text..."
          className="input"
        />
        <button onClick={handleClick} className="btn">
          Click
        </button>
      </div>
    </>
  );
}

export default UseRef;

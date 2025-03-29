import { IconButton } from "@mui/material";
import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div>
        <h3>Selected Color: {color}</h3>
        <input type="color" value={color} onChange={handleColorChange} />
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            marginTop: "10px",
          }}
        ></div>
      </div>

      <IconButton>ishan</IconButton>
    </>
  );
}

export default ColorPicker;

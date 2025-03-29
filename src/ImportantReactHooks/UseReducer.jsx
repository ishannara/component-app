import React, { useState } from "react";

function UseReducer() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h1>UseReducer</h1>
        <input type="file" onChange={handleImageChange} />
        {image && (
          <img
            src={image}
            alt="Uploaded"
            style={{
              marginTop: "20px",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
        )}
      </div>
    </>
  );
}

export default UseReducer;

import React, { useState } from "react";

function ImagesSelecter() {
  const [file, setFile] = useState();

  const getFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <div>
        <h1>Select Images</h1>
        <input type="file" onChange={getFile} />
        <img src={file} style={{ height: "200px", width: "200px" }} />
      </div>
    </>
  );
}

export default ImagesSelecter;

import React, { useState } from "react";

function ImageSelect() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s", name: "Image 1" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s", name: "Image 2" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s", name: "Image 3" },
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
      <h2>Select an Image</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((image) => (
          <button key={image.id} onClick={() => handleImageSelect(image)}>
            {image.name}
          </button>
        ))}
      </div>

      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Image:</h3>
          <img src={selectedImage.src} alt={selectedImage.name} />
        </div>
      )}
    </>
  );
}

export default ImageSelect;

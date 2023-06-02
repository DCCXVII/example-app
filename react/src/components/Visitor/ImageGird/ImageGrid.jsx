import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  const images = [
    {
      url:
        "https://dplvxv40qur9n.cloudfront.net/0fa76adf-b3de-4d62-9aca-ad8fee622042.jpg",
        title: "Dance Flow",

    },
    {
      url:
        "https://dplvxv40qur9n.cloudfront.net/0fa76adf-b3de-4d62-9aca-ad8fee622042.jpg",

        title: "Mindful",
    },
    {
      url:"https://dplvxv40qur9n.cloudfront.net/0fa76adf-b3de-4d62-9aca-ad8fee622042.jpg",
      title: "Yoga therapie"
    },
    {
      url:
        "https://dplvxv40qur9n.cloudfront.net/0fa76adf-b3de-4d62-9aca-ad8fee622042.jpg",
      title: "Yoga"
    }
  ];

  return (
    <div className="image-grid-container">
    <h2 className="image-grid-titre">Take a Step</h2>
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.url} alt={image.title} />
          <div className="image-title">{image.title}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGrid;

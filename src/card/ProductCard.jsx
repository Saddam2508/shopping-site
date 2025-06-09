import React, { useRef, useState } from "react";
import "./ProductCard.css";

const ProductCard = () => {
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setZoomPosition({ x, y });
  };

  return (
    <div className="product-card">
      <div
        className="image-container"
        onMouseEnter={() => setZoomVisible(true)}
        onMouseLeave={() => setZoomVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          ref={imgRef}
          src="https://img.drz.lazcdn.com/g/kf/Saef7f0a1e3874ab99874eed998c2db6eF.jpg_400x400q80.jpg_.webp"
          alt="Product"
          className="product-image"
        />
        {zoomVisible && (
          <div className="zoom-box">
            <img
              src="https://img.drz.lazcdn.com/g/kf/Saef7f0a1e3874ab99874eed998c2db6eF.jpg_400x400q80.jpg_.webp"
              alt="Zoomed"
              className="zoomed-image"
              style={{
                transform: `translate(-${zoomPosition.x * 5 - 125}px, -${
                  zoomPosition.y * 5 - 125
                }px)`,
              }}
            />
          </div>
        )}
      </div>
      <div className="product-details">
        <h2>Leakproof Thermal Water Bottle</h2>
        <p>Lightweight, 300ml, Ideal for Travel</p>
        <span className="price">৳435</span>
        <span className="original-price">৳683</span>
        <span className="discount">-36%</span>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

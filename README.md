# ProductCard Component

The `ProductCard` is a React component that displays a product with zoom functionality on hover. It includes product details such as title, description, price, and a "Buy Now" button.

## Features

- 📸 Image zoom effect on hover
- 📝 Product information (name, description, price, discount)
- 🛒 Buy button
- 💻 Responsive and interactive UI

## Preview

![Preview Image](https://img.drz.lazcdn.com/g/kf/Saef7f0a1e3874ab99874eed998c2db6eF.jpg_400x400q80.jpg_.webp)

## Installation

1. Copy the `ProductCard.js` and `ProductCard.css` files to your React project.
2. Import and use the component in your desired file:

```jsx
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="App">
      <ProductCard />
    </div>
  );
}
```

## Zoom Functionality

Hovering over the image will display a zoomed-in version.

The zoom effect follows the cursor.

Implemented using onMouseEnter, onMouseLeave, and onMouseMove.

## /ProductCard

├── ProductCard.js // React component

└── ProductCard.css // Styles for the component

## Styling (ProductCard.css)

Make sure to style the following classes:

.product-card

.image-container

.product-image

.zoom-box

.zoomed-image

.product-details

.price

.original-price

.discount

.buy-button

⚠️ Note: You may need to adjust zoom multiplier and positioning logic (zoomPosition.x \* 5 - 125) based on your layout.

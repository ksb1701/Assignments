import React from 'react';

// Intentional errors/warnings for Task 2:
// 1. Missing closing tag for img
// 2. Using 'class' instead of 'className' in React
// 3. Using undefined variable 'itemPrice' instead of 'product.price'
const ProductCard = ({ product }) => {
  return (
    <div class="product-card">
      <img src={product.imageUrl} alt={product.title} > 
      <h3>{product.title}</h3>
      <p>Price: ${itemPrice}</p> 
    </div>
  )
};

export default ProductCard;

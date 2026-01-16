import React, { useState } from 'react';
import '../styles/ProductCard.css';

//  PROPS use karke data recieved
function ProductCard({ productName, productPrice, productImage }) {
  
  const [isInCart, setIsInCart] = useState(false);
  
  function handleAddToCart() {
    setIsInCart(!isInCart);
  }

  return (
    <div className="product-card">  
      <div className="product-image-container">
        <img 
          src={productImage} 
          alt={productName} 
          className="product-image"
        />
      </div>
       
      <div className="product-info">
        <h3 className="product-name">{productName}</h3>
        <p className="product-price">₹{productPrice}</p>
        
       
        <button 
          onClick={handleAddToCart}
          className={isInCart ? 'btn-in-cart' : 'btn-add-cart'}
        >
          {isInCart ? '✓ Added to Cart' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 700,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 6880,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Our Products</h2>
      
      <div className="product-grid">
        
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            productPrice={product.price}
            productImage={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
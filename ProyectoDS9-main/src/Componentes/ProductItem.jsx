import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <li>
      <div className="product-item">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </li>
    
  );
};

export default ProductItem;

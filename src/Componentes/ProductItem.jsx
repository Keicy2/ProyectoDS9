import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <li>
      {product.name} - ${product.price}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </li>
  );
};

export default ProductItem;

import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='product-container'> 
        {products.map(product => (
          <div className="producto">
            <img src={product.image} alt={product.name} />
            <div className="producto-info">
              <span className="sku">SKU: {product.id}</span>
              <ProductItem 
                key={product.id}
                product={product} 
                addToCart={addToCart}
              />
            </div>
          </div>
        ))}
        </div>
  );
};

export default ProductList;
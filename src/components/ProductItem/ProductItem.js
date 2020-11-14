import React  from 'react';
import styles from "./ProductItem.module.css";


function ProductItem({ product }) {
  return (
    <li>
			<h4>{product.name}</h4>
		</li>
  );
}

export default ProductItem;
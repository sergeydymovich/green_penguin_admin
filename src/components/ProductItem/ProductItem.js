import React  from 'react';
import styles from "./ProductItem.module.css";


function ProductItem({ product }) {
  return (
    <li className={styles.item}>
			<h4>{product.name}</h4>
		</li>
  );
}

export default ProductItem;
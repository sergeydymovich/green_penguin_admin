import React  from 'react';
import styles from "./ProductItem.module.css";
import axios from "../../utils/axios.utils.js";

function ProductItem({ product }) {

	const deleteProduct = () => {

		axios.DELETE("/products", { id: product._id }).then(() => {
			
		}).catch(error =>  {
			console.log(error);
		});
	}

  return (
    <li className={styles.item}>
			<h4>{product.name}</h4>
			<img src={product.image} alt="product-img" />
			<button className={styles.deleteBtn} onClick={deleteProduct}>УДАЛИТЬ</button>
		</li>
  );
}

export default ProductItem;
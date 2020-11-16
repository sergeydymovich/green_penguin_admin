import React  from 'react';
import styles from "./ProductItem.module.css";
import axios from "../../utils/axios.utils.js";
import { Link } from "react-router-dom";

function ProductItem({ product }) {

	const deleteProduct = () => {

		axios.DELETE("/products", { id: product._id }).then(() => {
			
		}).catch(error =>  {
			console.log(error);
		});
	}

  return (
		<Link className={styles.link} to={`/product/${product._id}`} >
			<li className={styles.item}>
				
					<div className={styles.imageContainer}>
						<img className={styles.image} src={product.image} alt="product-img" />
					</div>
					<div className={styles.nameContainer}>
						<h4>{product.name}</h4>
					</div>
					<div className={styles.otherInfoContainer}>
						<p className={styles.brand}>{product.brand}</p>			
						<p className={styles.volume}>{product.volume || product.weight}{product.volume ? "мл": "гр"}</p>
						<p className={styles.price}>{product.price} BYN/шт</p>
					</div>	
					<div className={styles.buttonContainer}>
						<button className={styles.deleteBtn} onClick={deleteProduct}>УДАЛИТЬ</button>
					</div>			
			</li>
		</Link>	
  );
}

export default ProductItem;
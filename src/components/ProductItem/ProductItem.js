import React  from 'react';
import styles from "./ProductItem.module.css";
import axios from "../../utils/axios.utils.js";
import { Link } from "react-router-dom";
import noimg from "../../assets/noimg.png";
import { deleteProduct } from '../../actions/products.actions';
import { useDispatch } from 'react-redux';

function ProductItem({ product }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		axios.DELETE("/products", { id: product._id }).then(() => {
			dispatch(deleteProduct(product._id));
		}).catch(error =>  {
			console.log(error);
		});
	}

  return (
		
			<li className={styles.item}>
				<Link className={styles.link} to={`/product/${product._id}`} >
					<div className={styles.imageContainer}>
						<img className={styles.image} src={product.image ? `http://localhost:5000/${product.image}` : noimg} alt="product-img" />
					</div>
					<div className={styles.nameContainer}>
						<h4 className={styles.name}>{product.name}</h4>
					</div>
					<div className={styles.otherInfoContainer}>
						<p className={styles.brand}>{product.brand}</p>			
						<p className={styles.volume}>{product.volume || product.weight}{product.volume ? "мл": "гр"}</p>
						<p className={styles.price}>{product.price} BYN/шт</p>
					</div>
				</Link>		
				<div className={styles.buttonContainer}>
					<button className={styles.deleteBtn} onClick={handleDelete}>УДАЛИТЬ</button>
				</div>			
			</li>
  );
}

export default ProductItem;
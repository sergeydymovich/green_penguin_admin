import React from 'react';
import styles from "./Product.module.css";
import { Link } from 'react-router-dom';
import noimg from "../../assets/noimg.svg";

function Product({ product }) {

  return (
		<>
		<div className={styles.product}>
			<h2 className={styles.title}>Название: {product.name}</h2>
			<div className={styles.content}>
				<img className={styles.image} src={product.image || noimg} alt="product-img" />
				<div className={styles.info}>
					<p>Категория: {product.category}</p>
					<p>Подкатегория: {product.subCategory}</p>
					<p className={styles.brand}>Бренд: {product.brand}</p>			
					<p className={styles.volume}>Вес/Объем: {product.volume || product.weight}{product.volume ? "мл": "гр"}</p>
					<p className={styles.price}>Цена: {product.price} BYN/шт</p>
					<p className={styles.description}>Описание: {product.description}</p>
					<Link to={{
						pathname: "/form",
						state: { 
							product, 
						}
					}}>
						{!product.isPreview && <button className={styles.btn}>Редактировать товар</button>}
					</Link>						
				</div>		
			</div>		
		</div>

		</>
    
  );
}

export default Product;
import React, { useEffect, useState } from 'react';
import styles from "./Product.module.css";
import { Link } from 'react-router-dom';
import noimg from "../../assets/noimg.png";

function Product({ product }) {
	const [image, setImage] = useState("");

	useEffect(() => {
		if (typeof(product.image) === "object") {
			const img    = product.image;
			const reader  = new FileReader();

			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(img);
		}

		if (product.image && typeof(product.image) === "string") {
				setImage(`http://localhost:5000/${product.image}`)
		} else {
			setImage(noimg)
		}
	},[product.image]);

  return (
		<>
		<div className={styles.product}>
			<h2 className={styles.title}>Название: {product.name}</h2>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<img className={styles.image} src={image} alt="product-img" />
				</div>	
				<div className={styles.info}>
					<p className={styles.category}>Категория: {product.category}</p>
					<p className={styles.subCategory}>Подкатегория: {product.subCategory}</p>
					<p className={styles.brand}>Бренд: {product.brand}</p>			
					<p className={styles.volume}>Вес(гр): {product.weight}</p>
					<p className={styles.volume}>Объем(мл): {product.volume}</p>
					<p className={styles.price}>Цена(BYN/шт): {product.price}</p>
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
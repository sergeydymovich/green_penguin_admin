import React, {useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductList() {
	const [products, setProducts] = useState([]);
	const productsArr = useSelector(state => state.products.productsArr);

	useEffect(() => {
		setProducts(productsArr)
		console.log(products)
	},[productsArr])

  return (
    <div className={styles.container}>
			<div className={styles.btnContainer}>
				<Link to="/form">
					<button className={styles.btn}>Добавить товар</button>
				</Link>	
			</div>		
			<ul className={styles.list}>
			{products.map(product => (
				<ProductItem product={product} />
			))}
			</ul>
			
    </div>
  );
}

export default ProductList;
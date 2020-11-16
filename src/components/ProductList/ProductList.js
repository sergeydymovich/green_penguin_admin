import React, {useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";

function ProductList() {
	const [products, setProducts] = useState([]);
	const productsArr = useSelector(state => state.products.productsArr);

	useEffect(() => {
		setProducts(productsArr)
		console.log(products)
	},[productsArr])

  return (
    <div className={styles.container}>
			<ul className={styles.list}>
			{products.map(product => (
				<ProductItem product={product} />
			))}
			</ul>
			
    </div>
  );
}

export default ProductList;
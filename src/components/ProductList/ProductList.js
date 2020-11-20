import React, {useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function ProductList() {
	const [products, setProducts] = useState([]);
	const productsArr = useSelector(state => state.products.productsArr);
	const filteredProductsArr = useSelector(state => state.filteredProducts.filteredArr);
	const filterCategory = useSelector(state => state.filteredProducts.filterCategory);
	const isLoadingProducts = useSelector(state => state.products.isLoading);
	const isLoadingFilteredProducts = useSelector(state => state.filteredProducts.isLoading);
	const isLoading = isLoadingProducts || isLoadingFilteredProducts;

	useEffect(() => {
		const currentProducts = filterCategory ? filteredProductsArr : productsArr;

		setProducts(currentProducts);

	},[productsArr, filteredProductsArr])

  return (
    <div className={styles.container}>
			{isLoading &&
			<div className={styles.loaderContainer}>
				<Loader/>
			</div>				 
			}
			{!isLoading && 
			<>
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
		 </>
			}		
	
			
			
    </div>
  );
}

export default ProductList;
import React, { useEffect } from 'react';
import ProductItem from "../ProductItem/ProductItem";
import Navigation from "../Navigation/Navigation";
import styles from "./ProductList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { getProductsRequest, getProducts, getProductsAmount, getPagesCount } from "../../actions/products.actions";
import axios from "../../utils/axios.utils";

function ProductList() {
	const dispatch = useDispatch();
	const {productsArr, filterCategory, filterSubCategory, pageSize, activePage, isLoading} = useSelector(state => state.products);

	useEffect(() => {
		dispatch(getProductsRequest());
	
		axios.GET(`/products?category=${filterCategory}&subcategory=${filterSubCategory}&limit=${pageSize}&offset=${activePage*pageSize}`).then(res => {	
			const {products, count} = res.data;
				dispatch(getProducts(products));
				dispatch(getProductsAmount(count))
				dispatch(getPagesCount(Math.ceil(count/pageSize))) 								
		}).catch(error =>  {
			console.log(error);
		});

	},[filterCategory, filterSubCategory, activePage])

  return (
		<>
			<Navigation />
			<div className={styles.btnContainer}>
				<Link to="/form">
					<button className={styles.btn}>Добавить товар</button>
				</Link>	
			</div>
			<div className={styles.container}>
			{isLoading &&
			<div className={styles.loaderContainer}>
				<Loader/>
			</div>				 
			}
			{!isLoading && !productsArr.length && <p>товары не найдены...</p>}
			{!isLoading && 	
			<ul className={styles.list}>
			{productsArr.map(product => (
			<ProductItem key={product._id} product={product} />
			))}
			</ul>	
			}	
			</div>
			<Pagination isLoading={isLoading} />
		</>
    
  );
}

export default ProductList;
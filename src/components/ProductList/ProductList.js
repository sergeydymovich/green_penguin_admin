import React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import Navigation from "../Navigation/Navigation";
import styles from "./ProductList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { getProductsRequest, getProducts } from "../../actions/products.actions";
import axios from "../../utils/axios.utils";

function ProductList() {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products.productsArr);
	const filterCategory = useSelector(state => state.products.filterCategory);
	const filterSubCategory = useSelector(state => state.products.filterSubCategory);
	const pageSize = useSelector(state => state.products.pageSize);
	const isLoading = useSelector(state => state.products.isLoading);

	const getMoreProducts = (page) => {
			dispatch(getProductsRequest());
	
		axios.GET(`/products?category=${filterCategory}&subcategory=${filterSubCategory}&limit=${pageSize}&offset=${page*pageSize}`).then(res => {	
				dispatch(getProducts(res.data.products)); 								
		}).catch(error =>  {
			console.log(error);
		});

	};

  return (
		<>
		<Navigation />
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
					<ProductItem key={product._id} product={product} />
					))}
					</ul>	
		 </>
			}	
    </div>
		<Pagination getMoreProducts={getMoreProducts} isLoading={isLoading} />
		</>
    
  );
}

export default ProductList;
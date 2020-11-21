import React, {useEffect, useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import { getProductsRequest, getProducts } from "../../actions/products.actions";
import { getFilteredProductsRequest, getFilteredProducts } from "../../actions/filteredProducts";
import axios from "../../utils/axios.utils";

function ProductList() {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const productsArr = useSelector(state => state.products.productsArr);
	const filteredProductsArr = useSelector(state => state.filteredProducts.productsArr);
	const filterCategory = useSelector(state => state.filteredProducts.filterCategory);
	const filterSubCategory = useSelector(state => state.filteredProducts.filterSubCategory);
	const pageSize = useSelector(state => state.products.pageSize);
	const pagesAmount = useSelector(state => state.products.totalAmount);
	const filteredPagesAmount = useSelector(state => state.filteredProducts.totalAmount);
	const pages = filterCategory ? Math.ceil(filteredPagesAmount/pageSize) : Math.ceil(pagesAmount/pageSize);
	const isLoadingProducts = useSelector(state => state.products.isLoading);
	const isLoadingFilteredProducts = useSelector(state => state.filteredProducts.isLoading);
	const isLoading = isLoadingProducts || isLoadingFilteredProducts;

	const getMoreProducts = (page) => {

		if (filterCategory) {
			dispatch(getFilteredProductsRequest());
		} else {
			dispatch(getProductsRequest());
		}
		
		axios.GET(`/products?category=${filterCategory}&subcategory=${filterSubCategory}&limit=${pageSize}&offset=${page*pageSize}`).then(res => {	

			if (filterCategory) {
				dispatch(getFilteredProducts(res.data.products)); 
			} else {
				dispatch(getProducts(res.data.products)); 
			}
										
		}).catch(error =>  {
			console.log(error);
		});

	};

	useEffect(() => {
		const currentProducts = filterCategory ? filteredProductsArr : productsArr;
		setProducts(currentProducts);
	},[productsArr, filteredProductsArr])

  return (
		<>
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
		<Pagination  pages={pages} getMoreProducts={getMoreProducts} />
		</>
    
  );
}

export default ProductList;
import React from 'react';
import styles from "./Navigation.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getFilteredProducts } from "../../actions/filteredProducts";
import axios from "../../utils/axios.utils";

function Navigation() {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories.categoriesArr);

	const getProducts = (category, subCategory) => {

		console.log(category, subCategory)
		axios.GET(`/products?category=${category}&subcategory=${subCategory}`).then((res) => {	
			console.log(res.data.products)
			dispatch(getFilteredProducts(res.data.products));			
		}).catch(error =>  {
			console.log(error);
		});


	} 



  return (
    <div className={styles.container}>
			<ul className={styles.nav}>
			{categories && categories.map(categ => (
				<Link to="/">
					<li className={styles.item} onClick={() => getProducts(categ.name)}>
						<p className={styles.name}>{categ.name}</p>
						<ul className={styles.subList}>
						{categ.subcategories.map(sub => (
							<li className={styles.subItem} onClick={() => getProducts(categ.name, sub)}>
								<p className={styles.subName}>{sub}</p>
							</li>
						))}
						</ul>			
					</li>
				</Link>				
			))}	
			</ul>
			
    </div>
  );
}

export default Navigation;
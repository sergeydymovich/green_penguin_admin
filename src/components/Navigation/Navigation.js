import React, {useEffect} from 'react';
import styles from "./Navigation.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredProducts, changeCategory, changeSubCategory, getFilteredProductsRequest } from "../../actions/filteredProducts";
import axios from "../../utils/axios.utils";

function Navigation() {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories.categoriesArr);
	const category = useSelector(state => state.filteredProducts.filterCategory);
	const subCategory = useSelector(state => state.filteredProducts.filterSubCategory);

	const handleSubCategory = (e, subCategory, category) => {
		e.stopPropagation();
		dispatch(changeSubCategory(subCategory));
		dispatch(changeCategory(category))
	}

	const handleCategory = (category) => {
		dispatch(changeCategory(category))
		dispatch(changeSubCategory(""));
	}

	useEffect(() => {
		if (category) {
			dispatch(getFilteredProductsRequest());
			axios.GET(`/products?category=${category}&subcategory=${subCategory}`).then((res) => {	
				console.log(res.data.products)
				dispatch(getFilteredProducts(res.data.products));			
			}).catch(error =>  {
				console.log(error);
			});
		}
		
	},[category, subCategory])



  return (
    <div className={styles.container}>
			<ul className={styles.nav}>
			{categories && categories.map(categ => (
					<li className={styles.item} onClick={() => handleCategory(categ.name)}>
						<p className={styles.name}>{categ.name}</p>
						<ul className={styles.subList}>
						{categ.subcategories.map(sub => (
							<li className={styles.subItem} onClick={(e) => handleSubCategory(e, sub, categ.name)}>
								<p className={styles.subName}>{sub}</p>
							</li>
						))}
						</ul>			
					</li>			
			))}	
			</ul>
			
    </div>
  );
}

export default Navigation;
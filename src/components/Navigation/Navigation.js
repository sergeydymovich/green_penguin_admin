import React, {useEffect} from 'react';
import styles from "./Navigation.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredProducts, changeCategory, changeSubCategory, getFilteredProductsRequest, filteredProductsAmount } from "../../actions/filteredProducts";
import { clearProducts } from "../../actions/products.actions";
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
			dispatch(clearProducts());
			dispatch(getFilteredProductsRequest());
			axios.GET(`/products?category=${category}&subcategory=${subCategory}`).then((res) => {	
				dispatch(getFilteredProducts(res.data.products));
				dispatch(filteredProductsAmount(res.data.count))			
			}).catch(error =>  {
				console.log(error);
			});
		}
		
	},[category, subCategory])



  return (
    <div className={styles.container}>
			<ul className={styles.nav}>
			{categories && categories.map(categ => (
					<li className={styles.item} key={categ._id} onClick={() => handleCategory(categ.name)}>
						<p className={styles.name}>{categ.name}</p>
						<ul className={styles.subList}>
						{categ.subcategories.map(sub => (
							<li className={styles.subItem} key={categ.id + sub} onClick={(e) => handleSubCategory(e, sub, categ.name)}>
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
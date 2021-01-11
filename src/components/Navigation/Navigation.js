import React, {useEffect} from 'react';
import styles from "./Navigation.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, changeSubCategory } from "../../actions/products.actions";
import { getCategories } from "../../actions/categories.actions";
import axios from "../../utils/axios.utils";

function Navigation() {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories.categoriesArr);

	const handleSubCategory = (e, subCategory, category) => {
		e.stopPropagation();
		dispatch(changeCategory(category))
		dispatch(changeSubCategory(subCategory));	
	}

	const handleCategory = (category) => {
		dispatch(changeCategory(category))
	}

	useEffect(() => {
		if (!categories.length) {
			axios.GET("/categories").then(res => {
				dispatch(getCategories(res.data.categories));				
			}).catch(error =>  {
				console.log(error);
			});	
		}		
},[categories])

  return (
    <div className={styles.container}>
			<ul className={styles.nav}>
			{categories && categories.map(categ => (
					<li className={styles.item} key={categ._id} onClick={() => handleCategory(categ.name)}>
						<button className={styles.categoryBtn}>
							<p className={styles.name}>{categ.name}</p>
						</button>		
						<ul className={styles.subList}>
						{categ.subcategories.map(sub => (
							<li className={styles.subItem} key={categ.id + sub} onClick={(e) => handleSubCategory(e, sub, categ.name)}>
								<button className={styles.subCategoryBtn}>
									<p className={styles.subName}>{sub}</p>
								</button>			
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
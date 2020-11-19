import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import styles from "./Category.module.css";

function Category({ changeCategory, changeSubCategory, category, subCategory, isNewCategory, isNewSubCategory, setIsNewCategory, setIsNewSubCategory }) {

	const categories = useSelector(state => state.categories.categoriesArr);
	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {

		const categoryObj = categories.find(el => el.name === category);

		if (categoryObj && categoryObj.subcategories.length > 0) {
			setSubCategories(categoryObj.subcategories);
		}

	},[category, categories]);

	const toogleNewCategory = () => {
		setIsNewCategory(!isNewCategory);
		setIsNewSubCategory(false);
		changeCategory("");
		changeSubCategory("");

	}
	const toogleNewSubCategory = () => {
		setIsNewSubCategory(!isNewSubCategory)
		changeSubCategory("")

	}

	const changeNewCategory = (e) => {
		changeCategory(e.target.value);
	}

	const changeNewSubCategory = (e) => {
		changeSubCategory(e.target.value);
	}

  return (
		<div className={styles.categories}>
				<div className={styles.category}>
				<label>
					<p>Категория:</p>
					<select 
						disabled={isNewCategory}
						onChange={(e) => changeCategory(e.target.value)}
					>
					<option 
						disabled
						selected={!category}
					>
					не выбрана
					</option>
					{categories && !isNewCategory && categories.map((elem, i) => (
					<option
						key={elem._id}
						selected={elem.name === category}
					>
						{elem.name}
					</option>
					))}	
					</select>
				</label>
				<label>
					<p>Новая категория?</p>
					<input
					  
						type="checkbox"
						onChange={toogleNewCategory}
					/>
				</label>
				{isNewCategory &&
				<label>
					<p>Новая категория:</p>
					<input
						type="text"
						onChange={changeNewCategory}
					/>
				</label>
				}		
			</div>
			<div className={styles.subCategory}>
				<label>
					<p>Подкатегория:</p>
					<select
						disabled={isNewSubCategory || isNewCategory}
						onChange={(e) => changeSubCategory(e.target.value)}
					>	
					<option 
						disabled
						selected={!subCategory}
					>
					не выбрана
					</option> 
					{subCategories.length > 0 && subCategories.map((elem, i) => (
						<option
						 key={i}
						 selected={elem === subCategory}
						>
						{elem}
						</option>
					))}
					</select>
				</label>
				<label>
					<p>Новая подкатегория?</p>
					<input
						checked={isNewSubCategory} 
						disabled={!category}
						type="checkbox"
						onChange={toogleNewSubCategory}
					/>
				</label>	
				{isNewSubCategory && category &&
				<label>
					<p>Новая подкатегория:</p>
					<input 
						type="text"
						onChange={changeNewSubCategory}
					/>
				</label>
				}
			</div>
		</div>
		
		

  );
}

export default Category;

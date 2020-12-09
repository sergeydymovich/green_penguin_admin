import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import styles from "./Category.module.css";
import { validateSpaces } from "../../../utils/string.utils";

function Category({ update, category, subCategory, isNewCategory, isNewSubCategory, setIsNewCategory, setIsNewSubCategory }) {

	const categories = useSelector(state => state.categories.categoriesArr);
	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		const categoryObj = categories.find(el => el.name === category);

		if (categoryObj && categoryObj.subcategories.length > 0) {
			setSubCategories(categoryObj.subcategories);
		}
		if (!category) {
			update("subCategory", "");
		}
		
	},[category, categories]);

	const toogleNewCategory = () => {
		setIsNewCategory(!isNewCategory);
		setIsNewSubCategory(false);
		update("category", "");
	}
	const toogleNewSubCategory = () => {
		setIsNewSubCategory(!isNewSubCategory)
		update("subCategory", "");

	}

	const changeNewCategory = (e) => {
		const validCategory = validateSpaces(e.target.value);
		update("category", validCategory.toLowerCase());
	}

	const changeNewSubCategory = (e) => {
		const validSubCategory = validateSpaces(e.target.value);
		update("subCategory", validSubCategory.toLowerCase());
	}

  return (
		<div className={styles.categories}>
				<div className={styles.category}>
				<label>
					<p>Категория:</p>
					<select 
						disabled={isNewCategory}
						onChange={(e) => update("category", e.target.value)}
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
					  checked={isNewCategory}
						type="checkbox"
						onChange={toogleNewCategory}
					/>
				</label>
				{isNewCategory &&
				<label>
					<input
						type="text"
						onChange={changeNewCategory}
						maxLength="30"
					/>
				</label>
				}		
			</div>
			<div className={styles.subCategory}>
				<label>
					<p>Подкатегория:</p>
					<select
						disabled={isNewSubCategory || isNewCategory || !category}
						onChange={(e) => update("subCategory", e.target.value)}
					>	
					<option 
						disabled
						selected={!subCategory || !category}
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
					<input 
						type="text"
						onChange={changeNewSubCategory}
						maxLength="30"
					/>
				</label>
				}
			</div>
		</div>
  );
}

export default Category;

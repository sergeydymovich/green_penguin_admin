import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import styles from "./Category.module.css";
import { isExist, isExistValue } from "../../../utils/object.utils";

function Category({ changeCategory, changeSubCategory, category, subCategory }) {
	const categories = useSelector(state => state.categories.categoriesArr);
	const [isNewCategory, setIsNewCategory] = useState(false);
	const [isNewSubCategory, setIsNewSubCategory] = useState(false);
	const [categoryExist, setCategoryExist] = useState(false);
	const [subCategoryExist, setSubCategoryExist] = useState(false);

	const toogleNewCategory = () => {
		setIsNewCategory(!isNewCategory);
		changeCategory("");

	}
	const toogleNewSubCategory = () => {
		setIsNewSubCategory(!isNewSubCategory)
		changeSubCategory("")

	}

	const changeNewCategory = (e) => {
		changeCategory(e.target.value);
		setCategoryExist(false);
		const isValid = isExist(e.target.value, categories);
		if (isValid) {
			setCategoryExist(true);
		}
	}

	const changeNewSubCategory = (e) => {
		changeSubCategory(e.target.value);
		setSubCategoryExist(false);
		const isValid = isExistValue(e.target.value, category, categories)

		if (category && isValid) {			
				setSubCategoryExist(true);
		}
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
					{categoryExist &&<p className={styles.error}>Уже существует!</p>}
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
					{category && !isNewCategory &&  categories.find(el => el.name === category).subcategories.map((elem, i) => (
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
						disabled={!category}
						type="checkbox"
						onChange={toogleNewSubCategory}
					/>
				</label>	
				{isNewSubCategory &&
				<label>
					<p>Новая подкатегория:</p>
					<input 
						type="text"
						onChange={changeNewSubCategory}
					/>
					{subCategoryExist &&<p className={styles.error}>Уже существует!</p>}
				</label>
				}
			</div>
		</div>
		
		

  );
}

export default Category;

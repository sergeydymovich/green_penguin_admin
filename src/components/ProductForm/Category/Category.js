import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import styles from "./Category.module.css";

function Category({ changeCategory, changeSubCategory, category, subCategory }) {
	const categories = useSelector(state => state.categories.categoriesArr);
	const [isNewCategory, setIsNewCategory] = useState(false);
	const [isNewSubCategory, setIsNewSubCategory] = useState(false);

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
					{categories && categories.map((elem, i) => (
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
						onChange={() => setIsNewCategory(!isNewCategory)}
					/>
				</label>
				{isNewCategory &&
				<label>
					<p>Новая категория:</p>
					<input
						type="text"
						onChange={(e) => changeCategory(e.target.value)}
					/>
				</label>
				}		
			</div>
			<div className={styles.subCategory}>
				<label>
					<p>Подкатегория:</p>
					<select
						disabled={isNewSubCategory}
						onChange={(e) => changeSubCategory(e.target.value)}
					>	
					<option 
						disabled
						selected={!subCategory}
					>
					не выбрана
					</option> 
					{category && categories.find(el => el.name === category).subcategories.map((elem, i) => (
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
						type="checkbox"
						onChange={() => setIsNewSubCategory(!isNewSubCategory)}
					/>
				</label>	
				{isNewSubCategory &&
				<label>
					<p>Новая подкатегория:</p>
					<input 
						type="text"
						onChange={(e) => changeSubCategory(e.target.value)}
					/>
				</label>
				}
			</div>
		</div>
		
		

  );
}

export default Category;

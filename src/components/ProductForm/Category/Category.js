import React  from 'react';
import { useSelector } from 'react-redux';

function Category({ changeCategory, changeSubCategory, category }) {
	const categories = useSelector(state => state.categories.categoriesArr);

  return (
		<label>
				<p>Категория:</p>
				<select onChange={(e) => changeCategory(e.target.value)}>
				{categories && categories.map((elem, i) => (
					<option key={i} >{elem.name}</option>
				))}		
				</select>
				<select onChange={(e) => changeSubCategory(e.target.value)}>
				{category && categories.find(el => el.name === category).subcategories.map((elem, i) => (
					<option key={i} >{elem}</option>
				))}	
				</select>
		</label>
  );
}

export default Category;
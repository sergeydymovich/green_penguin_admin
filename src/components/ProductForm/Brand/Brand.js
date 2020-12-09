import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "../ProductForm.module.css";
import { validateSpaces } from "../../../utils/string.utils";

function Brand({ brand, update, isNewBrand, setIsNewBrand, category }) {
	const categories = useSelector(state => state.categories.categoriesArr);
	const [brands, setBrands] = useState([]);

	const handleChange = (e) => {
		const brand = validateSpaces(e.target.value);
		update(e.target.name, brand.toLowerCase());
	}

	const toogleCheckBox = () => {
		setIsNewBrand(!isNewBrand)
		update("brand", "");
	}

 useEffect(() => {
		const existCategoryObj = categories.find(el => el.name === category) || {};
		const brandsArr = existCategoryObj.brands || [];
		setBrands(brandsArr);
 },[category])


  return (
    <div className={styles.brandContainer}>
			<label>
				Бренд:
				<select 
					onChange={(e) => update(e.target.name, e.target.value)}
					name="brand"
					disabled={isNewBrand}
				>
					<option
					disabled
					selected={!brand}
					>
						не выбран
					</option>
					{brands.length > 0 && brands.map(el => (
						<option key={el} selected={el === brand}>{el}</option>
					))					
					}		
				</select>
			</label>
			<label>
				<p>Новый бренд?</p>
				<input
						type="checkbox"
						checked={isNewBrand}
						onChange={() => toogleCheckBox()}
				/>
			</label>
			
			{isNewBrand &&
			<input
				type="text"
				onChange={(e) => handleChange(e)}
				maxLength="50"
				name="brand"
			/>}			
		</div>
  );
}

export default Brand;
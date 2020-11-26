import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import styles from "./Brand.module.css";
import { validateSpaces } from "../../../utils/string.utils";

function Brand({changeBrand, brand}) {
	const [isNewBrand, setIsNewBrand] = useState(false);
	const brands = useSelector(state => state.categories.brandsArr);

	const handleChange = (e) => {
		const brand = validateSpaces(e.target.value);
		changeBrand(brand);
	}

 const toogleCheckBox = () => {
	changeBrand("");
	setIsNewBrand(!isNewBrand)
 }


  return (
    <div className={styles.brandContainer}>
			<label>
				Бренд:
				<select onChange={(e) => changeBrand(e.target.value)} disabled={isNewBrand}>
						<option selected={!brand}>не выбран</option>
					{brands.map(el => (					
						<option selected={brand === el.name}>{el.name}</option>
					))}
				</select>
			</label>
			<label>
				Новый бренд?
				<input type="checkbox" onChange={() => toogleCheckBox()}/>
			</label>
			
			{isNewBrand &&
			<input
				type="text"
				onChange={(e) => handleChange(e)}
				maxLength="50"
			/>}			
		</div>
  );
}

export default Brand;
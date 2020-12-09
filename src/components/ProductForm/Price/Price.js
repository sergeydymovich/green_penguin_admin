import React  from 'react';
import { validatePrice } from "../../../utils/string.utils";

function Price({ update, price }) {

	const handlePrice = (e) => {
		const price = validatePrice(e.target.value);
		update(e.target.name, price);
	}

  return (
		<label>
			<p>Цена(BYN):</p>
			<input
				value={price} 
				type="text" 
				onChange={handlePrice} 
				maxLength="5"
				name="price"
			/>
		</label>
  );
}

export default Price;
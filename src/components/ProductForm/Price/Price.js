import React  from 'react';
import { validatePrice } from "../../../utils/string.utils";

function Price({ changePrice, price }) {

	const handlePrice = (e) => {
		const price = validatePrice(e.target.value);
		changePrice(price);
	}

  return (
		<label>
							<p>Цена(BYN):</p>
							<input
								value={price} 
								type="text" 
								onChange={handlePrice} 
								maxLength="4"
							/>
		</label>
  );
}

export default Price;
import React  from 'react';
import Price from '../Price/Price';
import { validateNumber } from "../../../utils/string.utils";

function Size({changeVolume, changeWeight, volume, weight}) {

	const validateVolume = (e) => {
		const volume = validateNumber(e.target.value);
		changeVolume(volume);
	}
	const validateWeight = (e) => {
		const weight = validateNumber(e.target.value);
		changeWeight(weight);
	}

  return (
		<>
			<label>
				<p>Объем(в мл):</p>
				<input
					value={volume} 
					type="text"
					onChange={validateVolume}
					disabled={weight}
					maxLength="6"
				/>
			</label>
			<label>
				<p>Вес(в граммах):</p>
				<input
					value={weight} 
					type="text" 
					onChange={validateWeight} 
					disabled={volume}
					maxLength="6"
				/>

			</label>
		</>
  );
}

export default Size;
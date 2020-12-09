import React  from 'react';
import { validateNumber } from "../../../utils/string.utils";

function Size({update, volume, weight}) {

	const validateVolume = (e) => {
		const volume = validateNumber(e.target.value);
		update(e.target.name, volume);
	}
	const validateWeight = (e) => {
		const weight = validateNumber(e.target.value);
		update(e.target.name, weight);
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
					name="volume"
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
					name="weight"
				/>
			</label>
		</>
  );
}

export default Size;
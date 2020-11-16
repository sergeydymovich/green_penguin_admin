import React  from 'react';

function Size({changeVolume, changeWeight}) {

  return (
		<>
			<label>
				<p>Объем:</p>
				<input 
					type="text"
					onChange={(e) => changeVolume(e.target.value)}
				/>
				<input type="radio" value="l" name="volume" /> l
				<input type="radio" value="ml" name="volume" /> ml
			</label>
			<label>
				<p>Вес:</p>
				<input 
					type="text" 
					onChange={(e) => changeWeight(e.target.value)} 
				/>
				<input type="radio" value="mg" name="weight" /> mg
				<input type="radio" value="g" name="weight" /> g
				<input type="radio" value="kg" name="weight" /> kg
			</label>
		</>
  );
}

export default Size;
import React  from 'react';

function Brand({changeBrand, brand}) {

  return (
    <label>
			<p>Бренд:</p>
			<input
				value={brand} 
				type="text"
				onChange={(e) => changeBrand(e.target.value)}
			/>
		</label>
  );
}

export default Brand;
import React  from 'react';

function Brand({changeBrand}) {

  return (
    <label>
			<p>Бренд:</p>
			<input 
				type="text"
				onChange={(e) => changeBrand(e.target.value)}
			/>
		</label>
  );
}

export default Brand;
import React  from 'react';

function Price({ changePrice }) {

  return (
		<label>
							<p>Цена:</p>
							<input 
								type="text" 
								onChange={(e) => changePrice(e.target.value)} 
							/>
		</label>
  );
}

export default Price;
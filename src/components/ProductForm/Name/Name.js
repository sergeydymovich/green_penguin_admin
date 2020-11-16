import React  from 'react';

function Name({changeName}) {

  return (
    <label>
							<p>Название:</p>
								<input 
								type="text" 
								onChange={(e) => changeName(e.target.value)}
							/>
						</label>
  );
}

export default Name;
import React  from 'react';

function Name({changeName, name}) {

  return (
    <label>
							<p>Название:</p>
								<input 
								type="text"
								value={name} 
								onChange={(e) => changeName(e.target.value)}
								maxLength="80"
							/>
						</label>
  );
}

export default Name;
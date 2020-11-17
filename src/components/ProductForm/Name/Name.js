import React  from 'react';

function Name({changeName, name}) {

  return (
    <label>
							<p>Название:</p>
								<input 
								type="text"
								value={name} 
								onChange={(e) => changeName(e.target.value)}
							/>
						</label>
  );
}

export default Name;
import React  from 'react';

function Name({update, name}) {

  return (
    <label>
			<p>Название:</p>
				<input 
				type="text"
				value={name} 
				onChange={(e) => update(e.target.name, e.target.value)}
				maxLength="100"
				name="name"
			/>
		</label>
  );
}

export default Name;
import React  from 'react';

function Description({ changeDescription }) {

  return (
		<label>
				<p>Описание:</p>
				<textarea 
				onChange={(e) => changeDescription(e.target.value)} 
				/>
		</label>
  );
}

export default Description;
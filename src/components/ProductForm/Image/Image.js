import React  from 'react';

function Image({ changeImage }) {

	const choiseImg = (e) => {
		let file    = e.target.files[0];
			changeImage(file);

	};

  return (
		<label>
				<p>Изображение:</p>
				<input
				onChange={choiseImg} 
				type="file" 
				name="image"
				/>
		</label>
  );
}

export default Image;
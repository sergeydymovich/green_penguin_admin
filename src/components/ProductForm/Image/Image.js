import React  from 'react';

function Image({ changeImage }) {

	const choiseImg = (e) => {
		let file    = e.target.files[0];
		let reader  = new FileReader();

		reader.onloadend = () => {
			changeImage(reader.result);
		};
		reader.readAsDataURL(file);
	};

  return (
		<label>
				<p>Изображение:</p>
				<input
				onChange={choiseImg} 
				type="file" 
				/>
		</label>
  );
}

export default Image;
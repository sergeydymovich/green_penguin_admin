import React  from 'react';
import styles from "../ProductForm.module.css"

function Image({ update, image }) {

	const choiseImg = (e) => {
		let file    = e.target.files[0];
		update(e.target.name, file);
	};

  return (
		<label className={styles.imgContainer}>
				<p>Изображение:</p>
				<input
				onChange={choiseImg} 
				type="file" 
				name="image"
				/>
				{!image &&<p className={styles.fakeText}>Файл не выбран</p>}
		</label>
  );
}

export default Image;
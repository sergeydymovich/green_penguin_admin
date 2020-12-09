import React  from 'react';
import styles from "./Description.module.css"

function Description({ update, description }) {

  return (
		<label>
				<p>Описание:</p>
				<textarea
				className={styles.description}
				value={description} 
				onChange={(e) => update(e.target.name, e.target.value)} 
				name="description"
				/>
		</label>
  );
}

export default Description;
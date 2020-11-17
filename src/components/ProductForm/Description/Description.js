import React  from 'react';
import styles from "./Description.module.css"

function Description({ changeDescription, description }) {

  return (
		<label>
				<p>Описание:</p>
				<textarea
				className={styles.description}
				value={description} 
				onChange={(e) => changeDescription(e.target.value)} 
				/>
		</label>
  );
}

export default Description;
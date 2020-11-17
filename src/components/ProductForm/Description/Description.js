import React  from 'react';
import styles from "./Description.module.css"

function Description({ changeDescription }) {

  return (
		<label>
				<p>Описание:</p>
				<textarea
				className={styles.description} 
				onChange={(e) => changeDescription(e.target.value)} 
				/>
		</label>
  );
}

export default Description;
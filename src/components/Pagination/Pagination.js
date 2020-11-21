import React  from 'react';
import styles from "./Pagination.module.css";

function Pagination({ pages, getMoreProducts }) {
const pagesArr = pages ? new Array(pages).fill("") : [];

  return (
		<div className={styles.pagination}>
			{pagesArr.map((el, i) => (
				<button onClick={() => getMoreProducts(i)} className={styles.pageBtn}>{i + 1}</button>
			))}
			
			
		</div>
  );
}

export default Pagination;
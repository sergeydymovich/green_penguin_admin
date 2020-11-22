import React, { useEffect, useState }  from 'react';
import styles from "./Pagination.module.css";
import cn from "classnames/bind";

function Pagination({ pages, getMoreProducts }) {
const pagesArr = pages ? new Array(pages).fill("") : [];
const [activePage, setActivePage] = useState(0);

const handleClick = (index) => {
		setActivePage(index);
		getMoreProducts(index);
	}

	useEffect(() => {
		return () => {
			setActivePage(0);
		}
	},[pages])

  return (
		<div className={styles.pagination}>
			
			{pagesArr.length > 0 &&
				<>
					<button
					disabled={!activePage}
					className={styles.prev}
					onClick={() => handleClick(activePage - 1)}
				>
					prev
				</button>
				{pagesArr.map((el, i) => (
					<button
						onClick={() => handleClick(i)}
						className={ cn(styles.pageBtn, { [styles.active]: i === activePage })}
					>
						{i + 1}
					</button>
				))}
				<button
					disabled={activePage === pagesArr.length - 1}
					className={styles.next}
					onClick={() => handleClick(activePage + 1)}
				>
					next		 
				</button>
				</>	
			}	
		</div>
  );
}

export default Pagination;
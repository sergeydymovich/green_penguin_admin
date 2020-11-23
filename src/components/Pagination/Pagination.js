import React, { useEffect, useState }  from 'react';
import styles from "./Pagination.module.css";
import cn from "classnames/bind";

function Pagination({ pages, getMoreProducts }) {
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
				<button
					disabled={!activePage}
					className={styles.prev}
					onClick={() => handleClick(activePage - 1)}
				>
					prev
				</button>
				{activePage > 0 && 
				<>
				{activePage > 1 &&
				<>
					<button
						onClick={() => handleClick(0)}
						className={styles.pageBtn}
					>
						1
					</button>
					{activePage > 2 && <>...</>}
				</>
				}
				<button
					onClick={() => handleClick(activePage - 1)}
					className={styles.pageBtn}
				 >
					{activePage}
				</button>
				</>
				}
				<button
					className={ cn(styles.pageBtn, styles.active)}
				>
					{activePage + 1}
				</button>
				{activePage < pages - 1 &&
				<>	
					<button
						onClick={() => handleClick(activePage + 1)}
						className={styles.pageBtn}
					>			
						{activePage + 2}
					</button>
					{activePage !== pages - 2 &&
						<>
							{activePage < pages - 3 && <>...</>}
							<button
								onClick={() => handleClick(pages - 1)}
								className={styles.pageBtn}
							>
								{pages}
							</button>
						</>
					}
				</>	
				}						
				<button
					disabled={(activePage === pages - 1) || !pages}
					className={styles.next}
					onClick={() => handleClick(activePage + 1)}
				>
					next		 
				</button>
		</div>
  );
}

export default Pagination;
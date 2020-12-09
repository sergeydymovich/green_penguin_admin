import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeActivePage } from "../../actions/products.actions";
import styles from "./Pagination.module.css";
import cn from "classnames/bind";

function Pagination({ isLoading }) {
const dispatch = useDispatch();
const {pages, activePage} = useSelector(state => state.products);	

const handleClick = (index) => {
		dispatch(changeActivePage(index));
	}

  return (
		<div className={styles.pagination}>	
				{pages !== 1 && <button
					disabled={!activePage || isLoading}
					className={styles.prev}
					onClick={() => handleClick(activePage - 1)}
				>
					prev
				</button>
				}
				{activePage > 0 && 
				<>
				{activePage > 1 &&
				<>
					<button
						onClick={() => handleClick(0)}
						className={styles.pageBtn}
						disabled={isLoading}
					>
						1
					</button>
					{activePage > 2 && <>...</>}
				</>
				}
				<button
					onClick={() => handleClick(activePage - 1)}
					className={styles.pageBtn}
					disabled={isLoading}
				 >
					{activePage}
				</button>
				</>
				}
				<button
					className={ cn(styles.pageBtn, styles.active)}
					disabled={isLoading}
				>
					{activePage + 1}
				</button>
				{activePage < pages - 1 &&
				<>	
					<button
						onClick={() => handleClick(activePage + 1)}
						className={styles.pageBtn}
						disabled={isLoading}
					>			
						{activePage + 2}
					</button>
					{activePage !== pages - 2 &&
						<>
							{activePage < pages - 3 && <>...</>}
							<button
								onClick={() => handleClick(pages - 1)}
								className={styles.pageBtn}
								disabled={isLoading}
							>
								{pages}
							</button>
						</>
					}
				</>	
				}
				{pages !== 1 && 
					<button
					disabled={(activePage === pages - 1) || !pages || isLoading}
					className={styles.next}
					onClick={() => handleClick(activePage + 1)}
				>
					next		 
				</button>
				}						
				
		</div>
  );
}

export default Pagination;
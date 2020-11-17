import React from 'react';
import styles from "./Navigation.module.css";
import { useSelector } from 'react-redux';

function Navigation() {
	const categories = useSelector(state => state.categories.categoriesArr);

  return (
    <div className={styles.container}>
			<ul className={styles.nav}>
			{categories && categories.map(categ => (
				<li
					className={styles.item}>
					<p className={styles.name}>{categ.name}</p>
					<ul className={styles.subList}>
					{categ.subcategories.map(sub => (
						<li className={styles.subItem}>
							<p className={styles.subName}>{sub}</p>
						</li>
					))}
					</ul>
					
				</li>
			))}	
			</ul>
			
    </div>
  );
}

export default Navigation;
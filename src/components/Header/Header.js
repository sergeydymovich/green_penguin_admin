import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCategory } from '../../actions/products.actions'; 
import { getCategories } from '../../actions/categories.actions'; 


function Header() {
  const dispatch = useDispatch();

  const toHome = () => {
    dispatch(changeCategory(""));
    dispatch(getCategories([]));
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.title} onClick={toHome}>GREEN PENGUIN</h1>
      </Link>
      
    </div>
  );
}

export default Header;
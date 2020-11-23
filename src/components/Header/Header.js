import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsRequest, productsAmount, clearProducts } from '../../actions/products.actions';
import axios from "../../utils/axios.utils"; 


function Header() {
  const dispatch = useDispatch();
  const pageSize = useSelector(state => state.products.pageSize);

  const toHome = () => {
    dispatch(clearProducts());
    dispatch(getProductsRequest());

    axios.GET(`/products?limit=${pageSize}`).then(res => {	
      dispatch(getProducts(res.data.products));	
      dispatch(productsAmount(res.data.count));		
    }).catch(error =>  {
      console.log(error);
    });
  }
   
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1 className={styles.title} onClick={() => toHome()}>ПИНГВИН-АДМИН</h1>
      </Link>
      
    </div>
  );
}

export default Header;
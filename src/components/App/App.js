import React, { useEffect } from 'react';
import Header from "../Header/Header";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import styles from "./App.module.css";
import axios from "../../utils/axios.utils.js";
import { getProducts } from '../../actions/products.actions';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../actions/categories.actions';

function App() {
const dispatch = useDispatch();

	useEffect(() => {

		axios.GET("/products").then(res => {	
			dispatch(getProducts(res.data.products));				
		}).catch(error =>  {
			console.log(error);
		});

		axios.GET("/categories").then(res => {	
			dispatch(getCategories(res.data.categories));				
		}).catch(error =>  {
			console.log(error);
		});
	},[])
	
 
  return (
    <div className={styles.App}>
      <Header/>
			<ProductForm/>
			<ProductList/>
    </div>
  );
}

export default App;

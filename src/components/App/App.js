import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import ProductContainer from "../Product/ProductContainer";
import styles from "./App.module.css";
import axios from "../../utils/axios.utils.js";
import { getProducts, getProductsRequest } from '../../actions/products.actions';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../actions/categories.actions';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsRequest());
		
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
		<Router>
			<div className={styles.App}>
      <Header/>
			<Navigation/>
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/product/:id" component={ProductContainer} />
				<Route path="/form" component={ProductForm} />
			</Switch>	
    </div>
		</Router>
    
  );
}

export default App;

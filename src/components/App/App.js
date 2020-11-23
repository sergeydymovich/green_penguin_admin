import React, { useEffect } from 'react';
import Header from "../Header/Header";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import ProductContainer from "../Product/ProductContainer";
import styles from "./App.module.css";
import axios from "../../utils/axios.utils.js";
import { getProducts, getProductsRequest, productsAmount } from '../../actions/products.actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../actions/categories.actions';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
const dispatch = useDispatch();
const pageSize = useSelector(state => state.products.pageSize);

	useEffect(() => {
		dispatch(getProductsRequest());
		
		axios.GET(`/products?limit=${pageSize}`).then(res => {	
			dispatch(getProducts(res.data.products));	
			dispatch(productsAmount(res.data.count));		
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

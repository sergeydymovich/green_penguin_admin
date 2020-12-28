import React, {useEffect} from 'react';
import Header from "../Header/Header";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import Product from "../Product/Product";
import styles from "./App.module.css";
import { Switch, Route } from "react-router-dom";


function App() {
useEffect(() => { document.title = "Green Penguin Admin" })

  return (
			<div className={styles.App}>
      <Header/>
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/product" component={Product} />
				<Route path="/form" component={ProductForm} />
			</Switch>	
    </div>  
  );
}

export default App;

import React, {useEffect} from 'react';
import Header from "../Header/Header";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import ProductContainer from "../Product/ProductContainer";
import styles from "./App.module.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";


function App() {
useEffect(() => { document.title = "Green Penguin Admin" })

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

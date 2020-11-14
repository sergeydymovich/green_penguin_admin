import React, { useEffect } from 'react';
import Header from "../Header/Header";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import styles from "./App.module.css";
import axios from "../../utils/axios.utils.js";

function App() {

 
  return (
    <div className={styles.App}>
      <Header/>
			<ProductForm/>
			<ProductList/>
    </div>
  );
}

export default App;

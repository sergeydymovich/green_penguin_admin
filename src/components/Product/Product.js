import React  from 'react';

import styles from "./Product.module.css";
import axios from "../../utils/axios.utils.js";

function Product({ product }) {


  return (
    <div>
		 {product.name}
		</div>
  );
}

export default Product;
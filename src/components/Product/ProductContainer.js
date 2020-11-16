import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product.js";
import { useParams } from "react-router-dom";

function ProductContainer() {

	const{ id } = useParams();
	const product = useSelector(state => state.products.productsArr.find(el => el._id === id));	



	return (
		<>
			{product && <Product product={product} />}
		</>
	);
}

export default ProductContainer;
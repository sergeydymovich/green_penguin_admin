import { combineReducers } from "redux";
import products from "./products.reducer.js"; 
import categories from "./categories.reducer.js";
import filteredProducts from "./filteredProducts.reducer";

const rootReducer = combineReducers(
	{ 
		products,
		categories,
		filteredProducts,
	}
);

export default rootReducer;
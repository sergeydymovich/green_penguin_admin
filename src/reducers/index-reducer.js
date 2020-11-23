import { combineReducers } from "redux";
import products from "./products.reducer.js"; 
import categories from "./categories.reducer.js";

const rootReducer = combineReducers(
	{ 
		products,
		categories,
	}
);

export default rootReducer;
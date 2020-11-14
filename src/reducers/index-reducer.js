import { combineReducers } from "redux";
import products from "./products.reducer.js"; 

const rootReducer = combineReducers(
	{ 
		products,
	}
);

export default rootReducer;
import { GET_PRODUCTS } from "../actions/products.actions";

const INITIAL_STATE = {
	productsArr: [],
};

const products = (state = INITIAL_STATE, action) => {
	switch (action.type) {

	case GET_PRODUCTS:
		return {
			...state,
			productsArr: [...state.productsArr, ...action.payload.products ],
		};
 		
	default: 
		return state;

	}
};

export default products;
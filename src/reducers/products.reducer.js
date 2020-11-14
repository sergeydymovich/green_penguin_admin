import { GET_PRODUCTS } from "../actions/products.actions";

const INITIAL_STATE = {
	products: [],
};

const products = (state = INITIAL_STATE, action) => {
	switch (action.type) {

	case GET_PRODUCTS:
		return {
			...state,
			products: [...state.products, ...action.payload.products ],
		};
 		
	default: 
		return state;

	}
};

export default products;
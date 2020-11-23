import { GET_PRODUCTS, DELETE_PRODUCT, GET_PRODUCTS_REQUEST, PRODUCTS_AMOUNT, CLEAR_PRODUCTS } from "../actions/products.actions";

const INITIAL_STATE = {
	productsArr: [],
	isLoading: false,
	pageSize: 3,
	totalAmount: 0,
	pages: 0,
};

const products = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GET_PRODUCTS_REQUEST:
	return {
		...state,
		isLoading: true,
		productsArr: [],
	};
	case GET_PRODUCTS:
		return {
			...state,
			isLoading: false,
			productsArr: [...action.payload.products ],
		};
	case PRODUCTS_AMOUNT:
	return {
		...state,
		totalAmount: action.payload.amount,
		pages: Math.ceil(action.payload.amount/state.pageSize)
	};
	case DELETE_PRODUCT:
		return {
			...state,
			productsArr: [
				...state.productsArr.filter(el => el._id !== action.payload.id)
			]
		};
	case CLEAR_PRODUCTS:
		return {
			...INITIAL_STATE
		}; 		
	default: 
		return state;

	}
};

export default products;
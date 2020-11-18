import { GET_PRODUCTS, DELETE_PRODUCT, GET_PRODUCTS_REQUEST } from "../actions/products.actions";

const INITIAL_STATE = {
	productsArr: [],
	isLoading: false,
	totalCount: 0,
};

const products = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GET_PRODUCTS_REQUEST:
	return {
		...state,
		isLoading: true,
	};
	case GET_PRODUCTS:
		return {
			...state,
			isLoading: false,
			productsArr: [...state.productsArr, ...action.payload.products ],
		};
	case DELETE_PRODUCT:
		return {
			...state,
			productsArr: [
				...state.productsArr.filter(el => el._id !== action.payload.id)
			]
		}; 		
	default: 
		return state;

	}
};

export default products;
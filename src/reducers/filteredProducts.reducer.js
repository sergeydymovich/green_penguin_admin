import { FILTER_CATEGORY, FILTER_SUBCATEGORY, GET_FILTERED_PRODUCTS, GET_FILTERED_PRODUCTS_REQUEST, CLEAR_FILTER, FILTERED_PRODUCTS_AMOUNT } from "../actions/filteredProducts";

const INITIAL_STATE = {
	filterCategory: "",
	filterSubCategory: "",
	productsArr: [],
	isLoading: false,
	totalAmount: 0,
	pageSize: 8,
	pages: 0,
};

const filteredProducts = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FILTER_CATEGORY:
		return {
			...state,
			filterCategory: action.payload.category,
		};
		case FILTER_SUBCATEGORY:
		return {
			...state,
			filterSubCategory: action.payload.subCategory,
		};
	case GET_FILTERED_PRODUCTS:
		return {
			...state,
			productsArr: [...action.payload.products] || [],
			isLoading: false,
		};
	case FILTERED_PRODUCTS_AMOUNT:
		return {
			...state,
			totalAmount: action.payload.amount,
			pages: Math.ceil(action.payload.amount/state.pageSize)
		};
	case GET_FILTERED_PRODUCTS_REQUEST:
		return {
			...state,
			isLoading: true,
			productsArr: [],
		};
	case CLEAR_FILTER:
	return {
		...INITIAL_STATE
	};
	default: 
		return state;

	}
};

export default filteredProducts;
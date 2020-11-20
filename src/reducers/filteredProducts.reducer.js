import { FILTER_CATEGORY, FILTER_SUBCATEGORY, GET_FILTERED_PRODUCTS, GET_FILTERED_PRODUCTS_REQUEST } from "../actions/filteredProducts";

const INITIAL_STATE = {
	filterCategory: "",
	filterSubCategory: "",
	filteredArr: [],
	isLoading: false,
};

const filteredProducts = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FILTER_CATEGORY:
		return {
			...state,
			filterCategory: action.payload.category,
			filteredArr: [],
		};
		case FILTER_SUBCATEGORY:
		return {
			...state,
			filterSubCategory: action.payload.subCategory,
			filteredArr: [],
		};
	case GET_FILTERED_PRODUCTS:
		return {
			...state,
			filteredArr: [...state.filteredArr, ...action.payload.products] || [],
			isLoading: false,
		};
	case GET_FILTERED_PRODUCTS_REQUEST:
		return {
			...state,
			isLoading: true,
		};
	default: 
		return state;

	}
};

export default filteredProducts;
import { FILTER_CATEGORY, GET_FILTERED_PRODUCTS } from "../actions/filteredProducts";

const INITIAL_STATE = {
	filterCategory: "",
	filteredArr: [],
};

const filteredProducts = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FILTER_CATEGORY:
		return {
			...state,
			filterWord: action.payload.category,
			filteredArr: [],
		};
	case GET_FILTERED_PRODUCTS:
		return {
			...state,
			filteredArr: [...state.filteredArr, ...action.payload.products] || [],
			isLoading: false,
		};
	default: 
		return state;

	}
};

export default filteredProducts;
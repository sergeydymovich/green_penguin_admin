import { GET_CATEGORIES, GET_ALL_BRANDS } from "../actions/categories.actions";

const INITIAL_STATE = {
	categoriesArr: [],
	brandsArr: [],
};

const categories = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GET_CATEGORIES:
		return {
			...state,
			categoriesArr: [...action.payload.categories],
		};
	case GET_ALL_BRANDS:
	return {
		...state,
		brandsArr: [...action.payload.brands],
	};
 		
	default: 
		return state;

	}
};

export default categories;
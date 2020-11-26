import { GET_CATEGORIES } from "../actions/categories.actions";

const INITIAL_STATE = {
	categoriesArr: [],
	brandsArr: []
};

const categories = (state = INITIAL_STATE, action) => {
	switch (action.type) {

	case GET_CATEGORIES:
		return {
			...state,
			categoriesArr: [...action.payload.categories],
			brandsArr: [...action.payload.brands],
		};
 		
	default: 
		return state;

	}
};

export default categories;
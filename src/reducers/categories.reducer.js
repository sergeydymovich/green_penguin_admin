import { GET_CATEGORIES } from "../actions/categories.actions";

const INITIAL_STATE = {
	categoriesArr: [],
};

const categories = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case GET_CATEGORIES:
		return {
			...state,
			categoriesArr: [...action.payload.categories],
		};
 		
	default: 
		return state;

	}
};

export default categories;
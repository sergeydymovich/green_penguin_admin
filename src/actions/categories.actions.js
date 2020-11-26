export const GET_CATEGORIES = "GET_CATEGORIES";

export const getCategories = (categories, brands) => (
	{
		type: GET_CATEGORIES,
		payload: {
			categories,
			brands
		},
	}
);
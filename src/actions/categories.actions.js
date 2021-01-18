export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";

export const getCategories = (categories) => (
	{
		type: GET_CATEGORIES,
		payload: {
			categories,
		},
	}
);

export const getBrands = (brands) => (
	{
		type: GET_ALL_BRANDS,
		payload: {
			brands,
		},
	}
);
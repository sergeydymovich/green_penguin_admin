export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const GET_FILTERED_PRODUCTS = "GET_FILTERED_PRODUCTS";

export const filterCategory = (category) => (
	{
		type: FILTER_CATEGORY,
		payload: {
			category
		},
	}
);

export const getFilteredProducts = (products) => (
	{
		type: GET_FILTERED_PRODUCTS,
		payload: {
			products
		},
	}
);
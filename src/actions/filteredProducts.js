export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const FILTER_SUBCATEGORY = "FILTER_SUBCATEGORY";
export const GET_FILTERED_PRODUCTS = "GET_FILTERED_PRODUCTS";
export const GET_FILTERED_PRODUCTS_REQUEST = "GET_FILTERED_PRODUCTS_REQUEST";

export const changeCategory = (category) => (
	{
		type: FILTER_CATEGORY,
		payload: {
			category
		},
	}
);

export const changeSubCategory = (subCategory) => (
	{
		type: FILTER_SUBCATEGORY,
		payload: {
			subCategory
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

export const getFilteredProductsRequest = () => ({
	type: GET_FILTERED_PRODUCTS_REQUEST,
});
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const PRODUCTS_AMOUNT = "PRODUCTS_AMOUNT";
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const FILTER_SUBCATEGORY = "FILTER_SUBCATEGORY";

export const getProducts = (products) => (
	{
		type: GET_PRODUCTS,
		payload: {
			products
		},
	}
);

export const getProductsRequest = () => ({
	type: GET_PRODUCTS_REQUEST,
});

export const clearProducts = () => ({
	type: CLEAR_PRODUCTS,
});

export const productsAmount = (amount) => (
	{
		type: PRODUCTS_AMOUNT,
		payload: {
			amount
		},
	}
);

export const deleteProduct = (id) => (
	{
		type: DELETE_PRODUCT,
		payload: {
			id
		},
	}
);

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




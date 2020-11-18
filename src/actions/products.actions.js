export const GET_PRODUCTS = "GET_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";

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

export const deleteProduct = (id) => (
	{
		type: DELETE_PRODUCT,
		payload: {
			id
		},
	}
);




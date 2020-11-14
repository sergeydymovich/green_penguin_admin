export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = (products) => (
	{
		type: GET_PRODUCTS,
		payload: {
			products
		},
	}
);




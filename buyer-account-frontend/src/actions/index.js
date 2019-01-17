import request from "request-promise";

const getProductsUri = "https://www.jasonbase.com/things/2MXJ.json";

export const actionType = {
	GET_PRODUCTS: "get_products",
	FILTER_PRODUCTS: "filter_products",
	REMOVE_STOCK_ITEM: "REMOVE_STOCK_ITEM",
	UPDATE_CART_ITEM: "UPDATE_CART_ITEM",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	ADD_TO_CART: "ADD_TO_CART"
};

export function getProducts(params) {
	return async dispatch => {
		try {
			const response = await request.get(getProductsUri);
			dispatch({
				type: actionType.GET_PRODUCTS,
				payload: JSON.parse(response)
			});
		} catch (e) {
			console.error(e);
		}
	};
}

export function filterProducts(filter) {
	return dispatch => {
		dispatch({
			type: actionType.FILTER_PRODUCTS,
			payload: filter
		});
	};
}


// ACTIONS
// addToCart
export function addToCart(id, count) {
	return {
		type: actionType.ADD_TO_CART,
		id,
		count,
	}
}

// removeFromCart
export function removeFromCart(id) {
	return {
		type: actionType.REMOVE_FROM_CART,
		id,
	}
}

// updateCartItem
export function updateCartItem(id, count) {
	return {
		type: actionType.UPDATE_CART_ITEM,
		id,
		count,
	}
}

// removeStockItem
export function removeStockItem(id, count) {
	return {
		type: actionType.REMOVE_STOCK_ITEM,
		id,
		count,
	}
}

// ACTION CREATORS
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


// addToCart
export function addToCart(id, count) {
	return {
		type: actionType.ADD_TO_CART,
		id,
		count
	}
}

// removeFromCart
export function removeFromCart(id) {
	return {
		type: actionType.REMOVE_FROM_CART,
		id
	}
}

// updateCartItem
export function updateCartItem(id, count) {
	return {
		type: actionType.UPDATE_CART_ITEM,
		id,
		count
	}
}

// removeStockItem
export function removeStockItem(id, count) {
	return {
		type: actionType.REMOVE_STOCK_ITEM,
		id,
		count
	}
}


// const cartItem = (state, action) => {
// 	switch (action.type) {
// 	  case 'ADD_TO_CART':
// 		return {
// 		  id: action.id,
// 		  count: action.count,
// 		};
// 	  case 'REMOVE_FROM_CART':
// 		return state.id !== action.id;
// 	  case 'UPDATE_CART_ITEM':
// 		if (state.id !== action.id) {
// 		  return state;
// 		}
  
// 		return Object.assign(
// 		  {},
// 		  state,
// 		  {
// 			count: action.count,
// 		  }
// 		);
// 	  default:
// 		return state;
// 	}
//   };
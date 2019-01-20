import { combineReducers } from "redux";
import { actionType } from "./../actions";

const cartItem = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        id: action.id,
        count: action.count,
      };
    case 'REMOVE_FROM_CART':
      return state.id !== action.id;
    case 'UPDATE_CART_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: action.count,
        }
      );
    default:
      return state;
  }
};

// cart
const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        cartItem(undefined, action),
      ];
    case 'REMOVE_FROM_CART':
      return state.filter(item => cartItem(item, action));
    case 'UPDATE_CART_ITEM':
      return state.map(item => cartItem(item, action));
    default:
      return state;
  }
};

// stockItem
const stockItem = (state, action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: state.count - action.count,
        }
      );
    default:
      return state;
  }
};

// stock
const stock = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      return state.map(item => stockItem(item, action));
    default:
      return state;
  }
};

const products = (state = [], action) => {
	switch (action.type) {
		case actionType.GET_PRODUCTS:
			return Object.assign(
				{},
				{
					items: action.payload.Items,
					categories: getCategories(action.payload.Items),
					allItems: action.payload.Items
				}
			);
		case actionType.FILTER_PRODUCTS:
			return Object.assign(
				{},
				{
					items: state.allItems.filter(item => {
						return action.payload
							? action.payload === item.category
							: item;
					}),
					categories: state.categories,
					allItems: state.allItems
				}
			);
		default:
			return state;
	}
};

const reducers = combineReducers({ 
	products,
	cart,
	stock,
})

export default reducers;

function getCategories(itemArray) {
	let hasSeen = {},
		i = 0,
		itemArrayLength = itemArray.length,
		out = [];

	for (; i < itemArrayLength; i++) {
		hasSeen[itemArray[i].category]
			? (hasSeen[itemArray[i].category] += 1)
			: (hasSeen[itemArray[i].category] = 1);
	}

	out = Object.keys(hasSeen)
		.map(category => {
			return { category: category, count: hasSeen[category] };
		})
		.sort(function(a, b) {
			return b.count - a.count;
		});
	return out;
}

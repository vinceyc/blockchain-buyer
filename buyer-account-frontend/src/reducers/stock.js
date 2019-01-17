import stockItem from './stockItem';

// stock
export default function stock(state = [], action) {
    switch (action.type) {
        case 'REMOVE_STOCK_ITEM':
            return state.map(item => stockItem(item, action));
        default:
            return state;
    }
}
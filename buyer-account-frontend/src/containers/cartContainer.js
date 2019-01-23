import { connect } from "react-redux";
import { updateCartItem, removeFromCart, removeStockItem } from "./../actions";
import Cart from "./../components/cart";

  // CartContainer
  const cartGetSelectedValue = (e) => (
    e.target.value
  );
  
	export default connect(
    (state) => (
      {
        cart: state.cart.map(cartItem => {
          const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
          return {
            id: cartItem.id,
            name: item.name,
            price: item.price,
            img: item.img,
            count: cartItem.count,
            stockCount: item.count,
          };
        }),
      }
    ),
    (dispatch) => (
      {
        onQtyChange: (e, id) => {
          dispatch(updateCartItem(id, cartGetSelectedValue(e)));
        },
  
        onRemoveClick: (e, id) => {
          e.preventDefault();
          dispatch(removeFromCart(id));
        },
  
        dispatch: (reducers) => dispatch(reducers),
      }
    ),
    (stateProps, dispatchProps, ownProps) => (
      Object.assign({}, ownProps, stateProps, dispatchProps, {
        onCheckoutClick: () => dispatchProps.dispatch(showCheckout()),
        onPayClick: () =>
          stateProps.cart.map(item => {
            dispatchProps.dispatch(removeStockItem(item.id, item.count));
            dispatchProps.dispatch(removeFromCart(item.id));
          }),
      })
    )
  )(Cart);
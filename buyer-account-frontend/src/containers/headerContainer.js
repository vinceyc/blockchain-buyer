import { connect } from "react-redux";
import Header from "./../components/header";

// HeaderContainer
const showBackButton = (pathname) => (
	pathname !== '/' ? true : false
);

const showCartButton = (pathname) => (
	!pathname.includes('cart') ? true : false
);

const mapStateToProps = function(state, ownProps) {
	return {
	  children: ownProps.children,
		cartItems: state.cart.length,
		backButton: showBackButton(ownProps.location.pathname),
	  cartButton: showCartButton(ownProps.location.pathname),
	}
}

export default connect(mapStateToProps)(Header);
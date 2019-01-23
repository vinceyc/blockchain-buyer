import React from "react";
import propTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ children, cartItems, backButton, cartButton }) => {
	const getBackButton = () => (
	  <Link to='/' className='back-button'>
		&lt; Back to shop
	  </Link>
	);
  
	const getCartButton = () => (
	  <Link to='/cart' className='cart-button'>
		Cart ({cartItems})
	  </Link>
	);
  
	return (
	  <div className='shopping-cart-app'>
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="container">
						<nav>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<NavLink className="navbar-brand nav-link" activeClassName="selected" to="/">
										Our Store
										<span className="sr-only" />
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="selected" to="/shop">
										Shop
										<span className="sr-only" />
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" activeClassName="selected" to="/checkout">
										Checkout
										<span className="sr-only" />
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className='header-contents'>
						{backButton ? getBackButton() : ''}
						{cartButton ? getCartButton() : ''}
					</div>
				</nav>
			</header>
	  </div>
	);
};

Header.propTypes = {
	cartItems: propTypes.number.isRequired,
	backButton: propTypes.bool.isRequired,
	cartButton: propTypes.bool.isRequired,
}; 

export default Header;
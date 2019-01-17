import React from "react";
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
									<NavLink className="nav-link" activeClassName="selected" to="/aboutus">
										About
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
			<main className='main'>
				{children}
			</main>
	  </div>
	);
};

Header.PropTypes = {
	cartItems: PropTypes.number.isRequired,
	backButton: PropTypes.bool.isRequired,
	cartButton: PropTypes.bool.isRequired,
}; 

export default Header;
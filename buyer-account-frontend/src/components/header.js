import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
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
				</nav>
			</header>
		);
	}
}

export default Header;

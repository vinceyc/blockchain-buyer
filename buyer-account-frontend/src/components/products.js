import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions";
import Carousel from "./carousel";
import ProductThumbnail from "./productThumbnail";

class MainPage extends Component {
	
	async componentDidMount() {
		this.props.getProducts();
	}

	render() {
		const { ProductsList } = this.props;
		if (ProductsList) {
			return (
				<div className="col-lg-9">
					<Carousel />
					<div className="row">
						{ProductsList.map((Product) => {
							return <ProductThumbnail key={Product.id} productData={Product} />
						})}
					</div>
				</div>
			);
		} else return null;
	}
}

const mapStateToProps = state => ({
	ProductsList: state.items
});

const mapDispatchToProps = dispatch => ({
	getProducts: () => {
		dispatch(getProducts());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

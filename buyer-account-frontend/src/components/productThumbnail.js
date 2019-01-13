import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductThumbnail extends Component {
	render() {
		const productData = this.props.productData;
		
		return (
			<div
				key={productData.id}
				className="col-lg-4 col-md-6 mb-4"
			>
				<div className="card h-100">
					<Link to="#">
						<img
							className="card-img-top"
							src={productData.img}
							alt={productData.name}
						/>
					</Link>
					<div className="card-body">
						<h4 className="card-title">
							<Link to="#">{productData.name}</Link>
						</h4>
						<p className="card-text">
							{productData.sponsor}
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							&#9733; &#9733; &#9733; &#9733;
							&#9734;
						</small>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductThumbnail;
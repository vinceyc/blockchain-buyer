import React from "react";
import PropTypes from "prop-types";

import AddItemContainer from "./../containers/addItemContainer";

// Item
const Item = ({ id, name, description, price, img }) => (
	<div className={'item item-' + id}>
	  <img
		className='item-image'
		alt={description}
		src={img}
	  />
	  <div className='item-details'>
		<h1 className='item-name'>
		  {name}
		</h1>
		<h2 className='item-price'>
		  ${price.toFixed(2)}
		</h2>
		<p className='item-desc'>
		  {description}
		</p>
		<AddItemContainer id={id} />
	  </div>
	</div>
  );
  
  Item.PropTypes = {
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired,
  };

  export default Item;
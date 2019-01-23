import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledLi = styled.li`
  margin: 1rem auto;
  max-width: 21.625rem;
  border: 0.0625rem solid #999;
  box-shadow: 0 0 0.25rem 0.25rem #ddd;
  @media (min-width: 40rem) {
    flex: 0 0 43%;
    margin: 2rem 3.5%;
  }
  @media (min-width: 54rem) {
    flex: 0 0 29%;
    margin: 2rem 2.166%;
  }
`

// ShopItem
const ShopItem = ({ id, name, price, img }) => (
  <StyledLi className={'shop-item-' + id}>
    <Link to={'/item/' + id}>
      <div className='shop-item-container'>
        <img
          className='shop-item-image'
          src={img}
        />
        <h1 className='shop-item-name'>
          {name}
        </h1>
        <h2 className='shop-item-price'>
          ${price.toFixed(2)}
        </h2>
      </div>
    </Link>
  </StyledLi>
);

ShopItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default ShopItem;
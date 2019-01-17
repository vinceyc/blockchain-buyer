import React from "react";
import PropTypes from "prop-types";

// PayButton
const PayButton = ({ onPayClick }) => (
  <button
    type='button'
    className='cart-pay-button'
    onClick={() => onPayClick()}
  >
    Pay now
  </button>
);

PayButton.PropTypes = {
  onPayClick: PropTypes.func.isRequired,
};

export default PayButton;
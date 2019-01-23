import React, { Component } from 'react';
import { DrizzleProvider } from "drizzle-react";
import BlockchainPayment from "./blockchainPayment";

// Import contract
import BuyerLoyaltyToken from "./../contracts/BuyerLoyaltyToken.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545"
    }
  },
  contracts: [
    BuyerLoyaltyToken
  ]
};

class Checkout extends Component {
  
  render() {
    return  (
      <DrizzleProvider options={options}>
        <BlockchainPayment />
      </DrizzleProvider>
    )
  }
}

export default Checkout;
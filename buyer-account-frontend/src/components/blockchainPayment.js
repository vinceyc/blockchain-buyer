import React, { Component } from 'react';
import logo from './../logo.svg';
//import './App.css';
// Use styled-components

import { drizzleConnect } from "drizzle-react";
import { ContractData, ContractForm } from "drizzle-react-components";

class BlockchainPayment extends Component {
  
  render() {
    const { drizzleStatus, accounts } = this.props;

    if (drizzleStatus.initialized) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Checkout Page</h1>
            <p>
              <strong>Total Supply</strong>
              <ContractData
                contract="BuyerLoyaltyToken"
                method="totalSupply"
                methodArgs={[{ from: accounts[0] }]}
              />{" "}
              <ContractData
                contract="BuyerLoyaltyToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>Balance</strong>
              <ContractData
                contract="BuyerLoyaltyToken"
                method="balanceOf"
                methodArgs={[accounts[0]]}
              />
            </p>
            <h3>Send Tokens</h3>
          </header>
          <div className="App-intro">
            <ContractForm
              contract="BuyerLoyaltyToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />
          </div>
        </div>
      );
    }

    return <div>Loading dapp...</div>;
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    drizzleStatus: state.drizzleStatus,
    BuyerLoyaltyToken: state.contracts.BuyerLoyaltyToken
  };
};

const BlockchainPaymentContainer = drizzleConnect(BlockchainPayment, mapStateToProps);
export default BlockchainPaymentContainer;
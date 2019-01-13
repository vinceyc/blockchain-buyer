pragma solidity ^0.4.24;

import 'zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract BuyerLoyaltyToken is StandardToken {
  string public name = 'BuyerLoyaltyToken';
  string public symbol = 'BLT';
  uint8 public decimals = 2;

  uint public startingSupply = 900000;

  constructor() public {
    totalSupply_ = startingSupply;
    balances[msg.sender] = startingSupply;
  }
}
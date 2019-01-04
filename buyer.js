//jshint ignore: start

// contracts
const Buyer = artifacts.require("./Buyer.sol");
const BuyerRegistry = artifacts.require("./BuyerRegistry.sol");

/**************************************
* Tests
**************************************/

contract('Buyer Contract Tests', function(accounts) {

  let buyer;
  let buyerRegistry;
  const user = accounts[0]; 

  it('should be deployed, Buyer', async () => {
    buyer = await Buyer.deployed();
    assert(buyer !== undefined, 'Buyer was NOT deployed' + buyer);
  });

  it('should be deployed, BuyerRegistry', async () => {
    buyerRegistry = await BuyerRegistry.deployed();
    assert(buyerRegistry !== undefined, 'BuyerRegistry was NOT deployed' + buyerRegistry);
  });

});
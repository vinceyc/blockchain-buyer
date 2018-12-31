const Buyer = artifacts.require("./Buyer.sol");
const BuyerRegistry = artifacts.require("./BuyerRegistry.sol");
 module.exports = function(deployer) {
  deployer.deploy(Buyer, "firstBuyer");
  deployer.deploy(BuyerRegistry);
};
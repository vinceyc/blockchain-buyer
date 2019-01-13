var BuyerLoyaltyToken = artifacts.require("BuyerLoyaltyToken");

module.exports = function(deployer) {
  deployer.deploy(BuyerLoyaltyToken);
};
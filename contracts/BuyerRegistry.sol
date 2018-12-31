pragma solidity ^0.4.24;

contract BuyerRegistry {

  event RegisterNewBuyer(string indexed buyerName);
  
  struct BuyerData {
    address buyerAddress;
    string buyerName;
  }

  BuyerData[] public buyerDataList;
  uint256[] public buyerIds;

  mapping (address => uint256[]) public ownerToOwnedBuyerIds;

  // Maps Buyer Contract id's to the owner address
  mapping (uint256 => BuyerData) public BuyerMapping;

  function registerBuyer(address _address, string _buyerName) external {
    uint256 id = buyerDataList.push(BuyerData(_address, _buyerName)) - 1;
    ownerToOwnedBuyerIds[msg.sender].push(id);
    emit RegisterNewBuyer(_buyerName);
  }

  function getOwnersBuyerIds() external view returns(uint256[] memory){
    return ownerToOwnedBuyerIds[msg.sender];
  }

  function getBuyerDataById(uint256 _buyerId) external view returns (address buyerAddress, string buyerName) {
    BuyerData memory data = BuyerMapping[_buyerId];
    return (data.buyerAddress, data.buyerName);
  }

  // function accessOwnedBuyers() external view returns(uint256[] memory){
  //  return ownedBuyers[msg.sender];
  // }
}

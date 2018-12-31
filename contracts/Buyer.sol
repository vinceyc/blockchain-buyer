pragma solidity ^0.4.24;

import './BuyerRegistry.sol';

contract Buyer {

  event RegisteredAddress(uint256 indexed _addressId);
  event RegisteredPaymentMethod(uint256 indexed _paymentMethodId);

  BuyerRegistry buyerRegistry;
  string public buyerName;
  address public owner;

  struct AddressData {
    string addressString;
  }

  struct PaymentMethodData {
    string name;
    string number;
    string expiryDate;
    string vendor;
  }

  AddressData[] public addresses;
  uint256[] public addressIds;
  mapping (uint256 => AddressData) public AddressMapping;

  PaymentMethodData[] public paymentMethods;
  uint256[] public paymentMethodIds;
  mapping (uint256 => PaymentMethodData) public PaymentMethodMapping;

  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  constructor(string _buyerName) public {
    owner = msg.sender;
    buyerName = _buyerName;
    buyerRegistry.registerBuyer(address(0), _buyerName);
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner(address _sender) {
    require(_sender == owner, "not the owner");
    _;
  }

  function registerAddress(string _addressString) external onlyOwner(msg.sender) {
    uint256 id = addresses.length;
    addresses.push(AddressData(_addressString));
    AddressMapping[id] = AddressData(_addressString);
    addressIds.push(id);
    emit RegisteredAddress(id);
  }

  // function removeAddress(uint index) public onlyOwner(msg.sender) {
  //   if (index >= addresses.length) return;

  //   for (uint i = index; i<addresses.length-1; i++){
  //       addresses[i] = addresses[i+1];
  //   }
  //   addresses.length--;
  // }

  function getAddressesIds() external view onlyOwner(msg.sender) returns(uint256[]){
    return addressIds;
  }

  function getAddressDataById(uint256 _addressId) external view returns (string addressString) {
    AddressData memory data = AddressMapping[_addressId];
    return data.addressString;
  }

  function registerPaymentMethod(string _name, string _number, string _expiryDate, string _vendor) external onlyOwner(msg.sender) {
    uint256 id = paymentMethods.length;
    paymentMethods.push(PaymentMethodData(_name, _number, _expiryDate, _vendor));
    PaymentMethodMapping[id] = PaymentMethodData(_name, _number, _expiryDate, _vendor);
    paymentMethodIds.push(id);
    emit RegisteredPaymentMethod(id);
  }

  function getPaymentMethodIds() external view onlyOwner(msg.sender) returns(uint256[]){
    return paymentMethodIds;
  }

  function getPaymentMethodDataById(uint256 _paymentMethodId) external view returns (string name, string number, string expiryDate, string vendor) {
    PaymentMethodData memory data = PaymentMethodMapping[_paymentMethodId];
    return (data.name, data.number, data.expiryDate, data.vendor);
  }

  // function registerPaymentMethod(string _paymentMethodName, string _paymentMethodNumber, string _paymentMethodExpiryDate, string _paymentMethodVendor) external onlyOwner(msg.sender) {
  //   paymentMethods[paymentMethods.length + 1] = PaymentMethodData(paymentMethods.length + 1, _paymentMethodName, _paymentMethodNumber, _paymentMethodExpiryDate, _paymentMethodVendor);
  //   emit RegisteredPaymentMethod(_paymentMethodName);
  // }


}

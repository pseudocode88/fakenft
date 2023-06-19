// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./NFT.sol";

contract FakeNFT is NFT {
    uint public uniqueHolders;

    mapping(address => uint) addressToBalance;

    mapping(uint => address) tokenIdToOwner;

    constructor() NFT(10) {}

    function getTokenId() internal view returns (uint) {
        return supplyMinted + 1;
    }

    function getMaxSupply() public view returns (uint) {
        return i_maxSupply;
    }

    function getSupplyMinted() public view returns (uint) {
        return supplyMinted;
    }

    function getUniqueHolderCount() public view returns (uint) {
        return uniqueHolders;
    }

    function getOwner(uint _tokenId) public view returns (address) {
        return tokenIdToOwner[_tokenId];
    }

    function getBalance(address _wallet) public view returns (uint) {
        return addressToBalance[_wallet];
    }

    function mint(address _wallet) public override returns (uint) {
        uint tokenId = getTokenId();

        addressToBalance[_wallet] += 1;
        tokenIdToOwner[tokenId] = _wallet;

        uniqueHolders += (getBalance(_wallet) == 1) ? 1 : 0;

        supplyMinted += 1;
        return tokenId;
    }

    function transfer(
        uint _tokenId,
        address _sender,
        address _reciever
    ) public override {
        addressToBalance[_sender] -= 1;
        addressToBalance[_reciever] += 1;
        tokenIdToOwner[_tokenId] = _reciever;

        uniqueHolders -= (getBalance(_sender) == 0) ? 1 : 0;
        uniqueHolders += (getBalance(_reciever) == 1) ? 1 : 0;
    }
}

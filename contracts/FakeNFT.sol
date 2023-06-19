// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./NFT.sol";

contract FakeNFT is NFT {
    struct Holder {
        address wallet;
        uint tokenId;
    }

    uint public uniqueHolders;

    Holder[] holders;

    mapping(address => uint) addressToNumberOfMints;

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

    function getAllHolders() public view returns (uint) {
        return holders.length;
    }

    function getUniqueHolders() public view returns (uint) {
        return uniqueHolders;
    }

    function getNumberOfTokensHolding(
        address _wallet
    ) public view returns (uint) {
        return addressToNumberOfMints[_wallet];
    }

    function mint(address _wallet) public override returns (uint) {
        uint tokenId = getTokenId();
        holders.push(Holder(_wallet, tokenId));
        addressToNumberOfMints[_wallet] += 1;
        uniqueHolders += (addressToNumberOfMints[_wallet] == 1) ? 1 : 0;
        supplyMinted += 1;
        return tokenId;
    }
}

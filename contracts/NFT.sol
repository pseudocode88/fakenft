// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract NFT {
    uint public immutable i_maxSupply;
    uint public supplyMinted;

    constructor(uint _maxSupply) {
        i_maxSupply = _maxSupply;
    }

    function mint(address _wallet) public virtual returns (uint) {}
}

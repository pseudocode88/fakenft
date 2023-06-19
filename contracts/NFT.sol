// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract NFT {
    uint public immutable i_maxSupply;
    uint public supplyMinted;

    constructor(uint _maxSupply) {
        i_maxSupply = _maxSupply;
    }

    function mint(address _wallet) public virtual returns (uint) {}

    function transfer(
        uint _tokenId,
        address _sender,
        address _reciever
    ) public virtual {}

    function balanceOf(address _wallet) public virtual returns (uint)   {}

    function ownerOf(uint _tokenId) public virtual returns (address)   {}
}

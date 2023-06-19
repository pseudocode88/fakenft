const hre = require("hardhat");
const { expect, assert } = require("chai");

describe("Minting", () => {
    let fakeNFTFactory, fakeNFT;

    beforeEach(async () => {
        fakeNFTFactory = await hre.ethers.getContractFactory("FakeNFT");
        fakeNFT = await fakeNFTFactory.deploy();
    });

    it("Should return supply minted as 1 upon minting one NFT", async () => {
        let expectedvalue = 1;
        const trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        let currentValue = await fakeNFT.getSupplyMinted();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should return supply minted as 3 upon minting 3 NFT", async () => {
        let expectedvalue = 3;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        let currentValue = await fakeNFT.getSupplyMinted();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should return number of token holding as 3 when one person mints 3 NFT", async () => {
        let expectedvalue = 3;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        let currentValue = await fakeNFT.getNumberOfTokensHolding("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");

        assert.equal(expectedvalue, currentValue);
    });

    it("Should return unique holders as 1 when one person mints 3 NFT", async () => {
        let expectedvalue = 1;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        let currentValue = await fakeNFT.getUniqueHolders();

        assert.equal(expectedvalue, currentValue);
    });
})
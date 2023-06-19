const hre = require("hardhat");
const { expect, assert } = require("chai");

describe("Deployment", () => {
    let fakeNFTFactory, fakeNFT;

    beforeEach(async () => {
        fakeNFTFactory = await hre.ethers.getContractFactory("FakeNFT");
        fakeNFT = await fakeNFTFactory.deploy();
    });

    it("Should init the contract with Max Supply 10", async () => {
        let expectedvalue = 10;
        let currentValue = await fakeNFT.i_maxSupply();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should init the contract with Mint Supply 0", async () => {
        let expectedvalue = 0;
        let currentValue = await fakeNFT.supplyMinted();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should init the contract with 0 holders", async () => {
        let expectedvalue = 0;
        let currentValue = await fakeNFT.getUniqueHolderCount();

        assert.equal(expectedvalue, currentValue);
    });
})
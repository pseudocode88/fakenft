const hre = require("hardhat");
const { expect, assert } = require("chai");

describe("Mint", () => {
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

        let currentValue = await fakeNFT.balanceOf("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");

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

        let currentValue = await fakeNFT.getUniqueHolderCount();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should return unique holders as 3 when three people mint NFT", async () => {
        let expectedvalue = 3;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2)

        let currentValue = await fakeNFT.getUniqueHolderCount();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should return supply minted as 5 when three people mint 5 NFTs", async () => {
        let expectedvalue = 5;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
        trxResponse.wait(2)

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2)

        let currentValue = await fakeNFT.getSupplyMinted();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should supply minted be 9 while 9 NFTs are minted", async () => {
        let expectedvalue = 9;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        let currentValue = await fakeNFT.getSupplyMinted();

        assert.equal(expectedvalue, currentValue);
    });

    it("Should supply minted same as max supply on mint out", async () => {
        let expectedvalue = 10;
        let trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E");
        trxResponse.wait(2);

        let currentValue = await fakeNFT.getSupplyMinted();

        assert.equal(expectedvalue, currentValue);
    });
})
const hre = require("hardhat");
const { expect, assert } = require("chai");

describe("Transfer", () => {
    let fakeNFTFactory, fakeNFT;

    const sender = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
    const reciver = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
    const reciver2 = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";

    beforeEach(async () => {
        fakeNFTFactory = await hre.ethers.getContractFactory("FakeNFT");
        fakeNFT = await fakeNFTFactory.deploy();
    });

    it("Should return reciever balance as 1 upon tranfer 1 NFT", async () => {
        let expectedvalue = 1, trxResponse, currentValue;

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.transfer(1, sender, reciver);
        trxResponse.wait(2);

        currentValue = await fakeNFT.getBalance(reciver);

        assert.equal(currentValue, expectedvalue);
    })

    it("Should return sender balance as 0 upon tranfer 1 NFT", async () => {
        let expectedvalue = 0, trxResponse, currentValue;

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.transfer(1, sender, reciver);
        trxResponse.wait(2);

        currentValue = await fakeNFT.getBalance(sender);

        assert.equal(currentValue, expectedvalue);
    })

    it("Should return unique holder as 1 upon tranfer 1 NFT", async () => {
        let expectedvalue = 1, trxResponse, currentValue;

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.transfer(1, sender, reciver);
        trxResponse.wait(2);

        currentValue = await fakeNFT.getUniqueHolderCount();

        assert.equal(currentValue, expectedvalue);
    })

    it("Should return sender balance as 2 upon tranfering 1 NFT", async () => {
        let expectedvalue = 2, trxResponse, currentValue;

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.transfer(1, sender, reciver);
        trxResponse.wait(2);

        currentValue = await fakeNFT.getBalance(sender);

        assert.equal(currentValue, expectedvalue);
    })

    it("Should return unique holders as 3 upon tranfering 2 NFT", async () => {
        let expectedvalue = 3, trxResponse, currentValue;

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.mint(sender);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.transfer(1, sender, reciver);
        trxResponse.wait(2);

        trxResponse = await fakeNFT.transfer(2, sender, reciver2);
        trxResponse.wait(2);

        currentValue = await fakeNFT.getUniqueHolderCount();

        assert.equal(currentValue, expectedvalue);
    })
});
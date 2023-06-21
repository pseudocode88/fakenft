# FakeNFT

A smart contract to simulate NFT.

### Setup & Test

```shell
yarn install
yarn hardhat test
```

### Deployment
- Localhost `yarn run deploy-local`
- Goreli `yarn run deploy-testnet`

--

## v 1.0.0
In the first version of the project is designer with a base NFT contract which have a state varaible to define the max supply of the NFT and the declaration of basic functions like mint, transfer, ownerOf, balanceOf and getMaxSupply. The FakeNFT contract is our project which onherit the base contract and define the functionality.
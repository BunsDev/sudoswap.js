# sudoswapjs
An unofficial library to make it easier to work with SudoSwap in JS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


> This is a work in progress, issues and PR are welcome.

## Features

- Wrap contract calls to make it easier to interact with pools/router from JS.
- Parse historical trade events of pools.


## Documentation
## Sudo

## Pool

### Getters

```
pool.getType() // Type of pool: TRADE/SELL/BUY
pool.getNFT() // Address of the NFT
pool.getDelta()
pool.getSpotPrice()
pool.getFee()
pool.getAssetRecipient()
pool.getNFTContract() // return an ethers.js instance of the ERC721 contract
pool.getPoolContract() // return an ethers.js instance of the pool contract
```

### History

```
pool.getTrades()
```

An array containing all past trades from the pool:

```
[
    {
    type: 'NFT_OUT_POOL',
    transactionHash: '0x60272ce4cd5e782929466eae3c473a36738255671c27a2b83cf5d2fa2d00d4fb',
    blockNumber: 15423334,
    nfts: [ '437', '291' ],
    nbNfts: 2,
    buyer: '0xE0982E0d39eeE312017c58DBa76c99Ca59b8A958',
    priceBefore: '40128478439841997',
    priceAfter: '48555458912208816',
    timestamp: 1661627205,
    pool: '0x6210e6229aec95d17f57dab93e042013d7d3603c',
    logIndex: 387
  },
  {
    type: 'NFT_IN_POOL',
    transactionHash: '0x66ca9107497fae4cebb1738a168bd83d305c5101c8adb8294783615472aa2738',
    blockNumber: 15424791,
    nfts: [ '1318', '1564' ],
    nbNfts: 2,
    buyer: '0x6210e6229AEc95d17f57DAB93e042013d7D3603C',
    priceBefore: '48555458912208816',
    priceAfter: '40128478439841996',
    timestamp: 1661647692,
    pool: '0x6210e6229aec95d17f57dab93e042013d7d3603c'
  },...
]
```






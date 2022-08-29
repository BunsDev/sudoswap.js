const SudoSwap = require('./src/SudoSwap.js');

(async () => {
    try {

        const sudo = new SudoSwap("https://eth-mainnet.g.alchemy.com/v2/_vDB38mJZ39GyrIYbhoFtEkxYVydis-o")
        const pool = sudo.getPool("0x6210e6229aec95d17f57dab93e042013d7d3603c")

        let nft = await pool.getNFT()
        console.log(nft)

        let spotPrice = await pool.getSpotPrice()
        console.log(spotPrice)

        let trades = await pool.getTrades();
        console.log(trades);
    return;
        let type = await pool.getType()
        console.log(type)

        let buyQuote = await pool.getBuyNFTQuote(1);
        console.log(buyQuote)

        let sellQuote = await pool.getSellNFTQuote(1);
        console.log(sellQuote)
    } catch (e) {
        console.log(e)
    }
})();
require("dotenv").config();

const sudoswap = require("./src/Sudoswap.js");

(async () => {
  try {
    const sudo = new sudoswap(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY}`,
    );

    // =============================================================
    //                   GET POOL DATA
    // =============================================================

    const pool = sudo.getPool("0x6210e6229aec95d17f57dab93e042013d7d3603c"); //initiate random pool based on chain id

    console.log(await pool.getCurve())
    let trades = await pool.getTrades();
    console.log(trades);

  } catch (e) {
    console.log(e);
  }
})();

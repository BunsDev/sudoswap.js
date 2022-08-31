const { ethers } = require("ethers");

const CURVES = {
    1: {
        "0x5B6aC51d9B1CeDE0068a1B26533CAce807f883Ee": "LINEAR",
        "0x432f962D8209781da23fB37b6B59ee15dE7d9841": "EXPONENTIAL"
    },
    4: {
        "0x3764b9FE584719C4570725A2b5A2485d418A186E": "LINEAR",
        "0xBc6760B11e433D25aAf5c8fCBC6cE99b14aC5D52": "EXPONENTIAL"
    }
}

const PROTOCOL_FEE = ethers.BigNumber.from("5000000000000000");
const PROTOCOL_FEE_DIVIDER = ethers.BigNumber.from("1000000000000000000")
const ETHER = ethers.BigNumber.from("1000000000000000000")

function CurveUtils(sudo) {
    this.sudo = sudo;
}

CurveUtils.prototype.addressToCurveType = function (network, address) {
    return CURVES[network][address];
}

CurveUtils.prototype.getBuyInfo = function (type, curve, fee, delta, spotPrice, nbNfts) {

    // make sure we deal with bignumbers
    fee = ethers.BigNumber.from(fee);
    console.log(fee.toString())
    delta = ethers.BigNumber.from(delta);
    spotPrice = ethers.BigNumber.from(spotPrice);
    nbNfts = ethers.BigNumber.from(nbNfts);

    let inputValue;
    let protocolFee;
    let newDelta;

    if (curve == 'EXPONENTIAL') {
        // https://github.com/sudoswap/lssvm/blob/main/src/bonding-curves/ExponentialCurve.sol

    } else if (curve == 'LINEAR') {
        // https://github.com/sudoswap/lssvm/blob/main/src/bonding-curves/LinearCurve.sol
        // uint256 newSpotPrice_ = spotPrice + delta * numItems;
        newSpotPrice = spotPrice.add(delta.mul(nbNfts));
        // uint256 buySpotPrice = spotPrice + delta;
        buySpotPrice = spotPrice.add(delta);
        /* 
        inputValue =
            numItems *
            buySpotPrice +
            (numItems * (numItems - 1) * delta) /
            2;
        */
        inputValue = nbNfts.mul(buySpotPrice).add(nbNfts.mul((nbNfts.sub(1)).mul(delta).div(2)))

        /*
        protocolFee = inputValue.fmul(
            protocolFeeMultiplier,
            FixedPointMathLib.WAD
        );
        */
        protocolFee = inputValue.mul(PROTOCOL_FEE).div(PROTOCOL_FEE_DIVIDER);

        // inputValue += inputValue.fmul(feeMultiplier, FixedPointMathLib.WAD);
        lpFee = inputValue.mul(fee).div(ETHER);
        inputValue = inputValue.add(lpFee);


        // inputValue += protocolFee;
        inputValue = inputValue.add(protocolFee);

        newDelta = delta;
    }
    return {
        inputValue, protocolFee, newDelta, lpFee, protocolFee, newSpotPrice
    }
}

CurveUtils.prototype.getSellInfo = function (type, curve, fee, delta, spotPrice, nbNfts) {
    if (curve == 'EXPONENTIAL') {

    } else if (curve == 'LINEAR') {

    }
}


module.exports = CurveUtils;

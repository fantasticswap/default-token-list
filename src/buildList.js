const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const polygon = require("./tokens/polygon.json");
const mumbai = require("./tokens/mumbai.json");
const evmosTestnet = require("./tokens/evmos-testnet.json")

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "FantasticSwap Labs List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmW3Aqk4S5FbE6fNuwrBbej1F5v3jRKiU1veA5jg44avc1",
    keywords: ["fantasticswap", "default"],
    tokens: [...mainnet, ...ropsten, ...goerli, ...kovan, ...rinkeby, ...polygon, ...mumbai, ...evmosTestnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};

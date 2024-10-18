require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    goerli: {
      url: "https://eth-sepolia.g.alchemy.com/v2/BIxLlVwfOjoI2yVCCa7lY1fsosFAncz4",
      accounts: [
        "89f406bf0c50e4d1ab3f58de5da8f6fcb968619d8bb99aa8eb60e6ae5ca650cd",
      ],
    },
  },
};
//89f406bf0c50e4d1ab3f58de5da8f6fcb968619d8bb99aa8eb60e6ae5ca650cd

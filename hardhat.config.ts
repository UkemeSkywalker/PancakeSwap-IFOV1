import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.2",
      },
      {
        version: "0.6.4",
      },
      {
        version: "0.6.12",
        settings: {},
      },
    ],
  }
};

export default config;

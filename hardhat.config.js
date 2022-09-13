require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
const projectId = projectId

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${projectId}`,
    //   accounts: ['pvkey']
    // },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${projectId}`,
    // accounts: ['pvkey']
    // },
    // matic: {
    //   url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
    //   accounts: [process.env.privateKey]
    // }
   
  },
  solidity: {
    version: '0.8.0',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

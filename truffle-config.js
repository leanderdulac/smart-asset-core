var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "";

module.exports =
{
    networks:
    {
        development:
        {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        testnet:
        {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/F4WHTukmf2BpFI8UE2L5"),
            network_id: 3,
            gas:  4709217
        },
        live: {
            provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/F4WHTukmf2BpFI8UE2L5"),
            network_id: 1,
            gasPrice: 10000000000
        }
    },
    mocha:
        {
            reporter: "mocha-junit-reporter",
            reporterOptions:
                {
                    mochaFile: "junit-test-results.xml"
                }
        }
};

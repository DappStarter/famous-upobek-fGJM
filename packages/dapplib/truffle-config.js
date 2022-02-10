require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rival script unable grace flower army giggle'; 
let testAccounts = [
"0xacf00c514845de52732c0d84d1c307b9a04f1091f81e508a2cfbcddaa0bbe6c0",
"0x0031b35dff0d63e4c3179364842e44ff9b05c5d7b2ae75aa15310c1c61177feb",
"0xdb2c13ec8ba2e873a99f6996d90e1d1ce04b6494d918fc33de32b1a12c955b67",
"0x488dd8fe4396db80b28f09081f4c71df083b8bd19c20b5906c5cff7981110cba",
"0x3a76d0b26496b497f7ff8d92d2677a30307d0a9b9cc389bac6c3a2501b20d217",
"0x9176b94ecd77e7942f421b1f85dd1554d8e429b9b837509e8f167c9bf86fa10f",
"0x8a0e76f64769f66477ad9d2400e22805157a912e6a95512e51467a63985619b4",
"0xda0a57c3bb2ee94a53a4c4fcaa71b1005e5b2ccc9e890d8d12cd8a6360a71a2f",
"0xabd57fe76f5eaae2aab81c644663f2695710c65abc3413b20a8b66b080caf184",
"0xd90102cf0d2db9a0e444db82dd46fd90800e5a5604bd760e4d22fc4d25e45074"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


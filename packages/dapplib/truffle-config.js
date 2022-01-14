require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth ridge connect harvest square system genuine'; 
let testAccounts = [
"0x5b0b8653cc62b8e7ba92109a22547a8caca9d232881e8e0a8d147b2d07a98e59",
"0x395ce82fb1bf12e33e07f84db2b65cc8e4fbcde320d81a8463db781e1ce8a933",
"0x949e6c7d144feefeb8e296389dff2a558bc15d6ed0454072bd4b98c999264214",
"0xc5a238395fbe7982474e3420d42f21d886bb8396e33bc716fd88ff1afdb01934",
"0xd6940d3e2e35d5e747a806ef9a9d36581586ff703e91e26598473006e8e466b3",
"0xe15308183becb53776f04031835171bfd43a3d8edf3d0e678189cd99b916e56c",
"0x4939a5282992219915e3e58908ff660ea8bfb8c307ec7c795a7bd6ba000f3ce7",
"0xa11ee43217f921ca1c6b1b6bdf1e02e14f8e9bd6cc1cdd27fc4a60448fbbf10f",
"0xaa083d7148719aa483c937b7cd7307948c600274a0eb15127d6622003911fdf9",
"0xd0d3dc3edc978203e6a6e45eb0481ed51df41d447f94a4017791498e182da195"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



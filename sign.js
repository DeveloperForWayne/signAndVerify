let verifyMessage = require("verifymessage");
let ethers = require("ethers");
require('dotenv').config()

async function verify() {
 
// Create a wallet to sign the hash with
let privateKey = process.env.PRIVATE_KEY;
let wallet = new ethers.Wallet(privateKey);

console.log("Wallet address:" + wallet.address);

// The hash we wish to sign and verify
let messageHash = ethers.utils.id("Hello World");

let messageHashBytes = ethers.utils.arrayify(messageHash)

// Sign the binary data
let flatSig = await wallet.signMessage(messageHashBytes);

let recoveredAddress = verifyMessage(messageHashBytes, flatSig);
console.log("Recovered Address:" + recoveredAddress);
}

verify();
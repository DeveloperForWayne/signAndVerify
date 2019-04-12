let verifyMessage = require("verifymessage");
let ethers = require("ethers");

async function verify() {
 
// Create a wallet to sign the hash with
let privateKey = '0x44f74e69ee761fd3288d497e7380861ed1825dfef32cc8b8612284c3df26fd1b';
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
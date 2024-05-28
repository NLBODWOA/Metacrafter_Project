// Create a variable to hold your NFT's
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
  const nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling
  };
  nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("NFT", i + 1);
    console.log("  Name:", nft.name);
    console.log("  Eye Color:", nft.eyeColor);
    console.log("  Shirt Type:", nft.shirtType);
    console.log("  Bling:", nft.bling);
    console.log("-------------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Example usage (replace with your desired NFT details)
mintNFT("Cool Cat", "Green", "Hooded Sweatshirt", "Gold Chain");
mintNFT("Space Dog", "Blue", "Spacesuit", "Rocket Pack");

listNFTs();

const totalSupply = getTotalSupply();
console.log("Total NFTs Minted:", totalSupply);

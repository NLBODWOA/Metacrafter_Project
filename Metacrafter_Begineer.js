// Create a variable to hold your NFT's
let nftCollection = [];

// Function to mint an NFT with various properties
function mintNFT(name, description, imageUrl, category) {
  const nft = {
    name: name,
    description: description,
    imageUrl: imageUrl,
    category: category
  };// Create a variable to hold your NFT's
let nftCollection = [];

// Function to mint an NFT with various properties
function mintNFT(name, description, imageUrl, category) {
  const nft = {
    name: name,
    description: description,
    imageUrl: imageUrl,
    category: category
  };
  nftCollection.push(nft);
}

// Function to list all NFTs with detailed information
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("NFT", i + 1);
    console.log("  Name:", nft.name);
    console.log("  Description:", nft.description);
    console.log("  Image URL:", nft.imageUrl);
    console.log("  Category:", nft.category);
    console.log("-------------------------");
  }
}

// Function to get the total number of minted NFTs
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions here with real-world examples

// Example 1: Digital Artwork NFT
mintNFT(
  "Cosmic Dream",
  "A mesmerizing exploration of space and nebulae.",
  "https://example.com/cosmicdream.jpg",
  "Digital Art"
);

// Example 2: Music Album NFT
mintNFT(
  "Harmony in Chaos",
  "The latest album by Starfire Band, a genre-bending masterpiece.",
  "https://example.com/harmonyinchaos.mp3",
  "Music"
);

// Example 3: Collectible Trading Card NFT
mintNFT(
  "Legendary Samurai",
  "A rare and powerful card from the 'Mythical Warriors' collection.",
  "https://example.com/samuraicard.png",
  "Trading Card"
);

listNFTs();

const totalSupply = getTotalSupply();
console.log("Total NFTs Minted:", totalSupply);

  nftCollection.push(nft);
}

// Function to list all NFTs with detailed information
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("NFT", i + 1);
    console.log("  Name:", nft.name);
    console.log("  Description:", nft.description);
    console.log("  Image URL:", nft.imageUrl);
    console.log("  Category:", nft.category);
    console.log("-------------------------");
  }
}

// Function to get the total number of minted NFTs
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions here with real-world examples

// Example 1: Digital Artwork NFT
mintNFT(
  "Cosmic Dream",
  "A mesmerizing exploration of space and nebulae.",
  "https://example.com/cosmicdream.jpg",
  "Digital Art"
);

// Example 2: Music Album NFT
mintNFT(
  "Harmony in Chaos",
  "The latest album by Starfire Band, a genre-bending masterpiece.",
  "https://example.com/harmonyinchaos.mp3",
  "Music"
);

// Example 3: Collectible Trading Card NFT
mintNFT(
  "Legendary Samurai",
  "A rare and powerful card from the 'Mythical Warriors' collection.",
  "https://example.com/samuraicard.png",
  "Trading Card"
);

listNFTs();

const totalSupply = getTotalSupply();
console.log("Total NFTs Minted:", totalSupply);

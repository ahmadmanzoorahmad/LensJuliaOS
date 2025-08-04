const { onchain } = require("juliaos");

async function fetchTokenMetadata(address) {
  const metadata = await onchain.getTokenMetadata(address);
  return metadata;
}

module.exports = fetchTokenMetadata;

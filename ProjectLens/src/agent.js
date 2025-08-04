const { agent } = require("juliaos");

const researchAgent = agent.useLLM({
  name: "ProjectResearchAgent",
  goal: "Perform research on Web3 projects",
  instructions: "Gather data from GitHub, Twitter, and Solana. Summarize technology, team, tokenomics, risks."
});

module.exports = researchAgent;

const { agent } = require("juliaos");

const gitHubBot = agent.useLLM({
  name: "GitHubBot",
  goal: "Analyze GitHub repo of Web3 project",
  instructions: "Check stars, forks, commits, and activity for a given repo."
});

const twitterBot = agent.useLLM({
  name: "TwitterBot",
  goal: "Analyze Twitter presence of a Web3 project",
  instructions: "Fetch recent tweets and analyze sentiment and engagement."
});

const tokenBot = agent.useLLM({
  name: "TokenBot",
  goal: "Analyze token metrics on Solana",
  instructions: "Fetch supply, holders, liquidity and summarize."
});

const runSwarm = async (project) => {
  const github = await gitHubBot.run(project);
  const twitter = await twitterBot.run(project);
  const token = await tokenBot.run(project);

  return {
    GitHub: github,
    Twitter: twitter,
    Token: token
  };
};

module.exports = runSwarm;

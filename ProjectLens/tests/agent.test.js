const agent = require("../src/agent");

(async () => {
  const result = await agent.run("Pyth Network");
  console.log("Agent Output:", result);
})();

const execSync = require("child_process").execSync;
const lastCommitCommand = "git rev-parse HEAD";

module.exports = {
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return execSync(lastCommitCommand).toString().trim();
  },
};

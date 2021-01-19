const withPWA = require("next-pwa");

module.exports = withPWA({
  distDir: "_next",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
  },
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
});

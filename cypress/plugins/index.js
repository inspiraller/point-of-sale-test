const injectDevServer = require("@cypress/react/plugins/next");
module.exports = (on, config) => {
  injectDevServer(on, config);
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
const execBuildReact = require("./modules/buildreact");
const execBuildResources = require("./modules/buildresources");
const execEditConfig = require("./modules/editconfig");

module.exports = () => {
  return new Promise((resolve, reject) => {
    Promise.all([execEditConfig(), execBuildReact(), execBuildResources()])
      .then(resolve)
      .catch(reject);
  });
};

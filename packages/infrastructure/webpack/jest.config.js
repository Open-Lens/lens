const {
  configForNode: { coverageThreshold, ...config },
} = require("@openlens/jest").monorepoPackageConfig(__dirname);

module.exports = config;

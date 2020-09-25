const path = require("path")

// Set Up Absolute Imports
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~assets": path.resolve(__dirname, "src/assets"),
        "~components": path.resolve(__dirname, "src/components"),
        "~containers": path.resolve(__dirname, "src/containers"),
        "~context": path.resolve(__dirname, "src/context"),
        "~hooks": path.resolve(__dirname, "src/hooks"),
        "~layout": path.resolve(__dirname, "src/layout"),
        "~providers": path.resolve(__dirname, "src/providers"),
      },
    },
  })
}

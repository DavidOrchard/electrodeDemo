module.exports = {
  cache: {
    cacheId: "electrodeDemo",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrodeDemo",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};

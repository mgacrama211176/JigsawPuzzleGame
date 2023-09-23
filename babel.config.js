module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // Specify your project's root directory
          alias: {
            // Define your absolute paths here
            components: "./src/components",
            screens: "./src/screens",
            utils: "./src/utils",
            assets: "./assets",
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};

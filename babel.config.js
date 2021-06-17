module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

// module.exports = {
//     project: {
//       ios: {},
//       android: {}, // grouped into "project"
//     },
//     assets: ["./assets/fonts/"], // stays the same
//   };
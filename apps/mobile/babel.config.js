module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@theme": "./ui/theme",
            "@components": "./ui/components",
            "@screens": "./ui/screens",
            "@navigation": "./navigation",
            "@hooks": "./hooks",
            "@utils": "./utils",
            "@store": "./store",
            "@app-trpc": "./trpc",
            "@app-firebase": "./firebase",
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ]
        }
      ],
      [
        "module:react-native-dotenv",
        {
          "moduleName": "@env",
          "path": ".env",
        }
      ]
    ]
  };
};

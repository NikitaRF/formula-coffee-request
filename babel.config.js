module.exports = function (api) {
  api.cache(true);
  return {
    // babel-preset-expo (SDK 56) автоматически подключает плагин
    // react-native-worklets, необходимый для react-native-reanimated 4,
    // поэтому отдельный 'react-native-reanimated/plugin' больше не нужен.
    presets: ['babel-preset-expo'],
  };
};

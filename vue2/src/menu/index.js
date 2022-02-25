const files = require.context("./modules", false, /\.js$/);
const modules = [];

files.keys().forEach((key) => {
  modules.push(files(key).default);
});

export default modules;

// const files = require.context("./modules", false, /\.js$/);
// const modules = [];

// files.keys().forEach((key) => {
//   modules.push(files(key).default);
// });

// export default modules;

import home from "./modules/home";
import error from "./modules/error";
import menu1 from "./modules/menu1";
import menu2 from "./modules/menu2";

export default [home, menu1, menu2, error];

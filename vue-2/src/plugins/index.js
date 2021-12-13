 export default {
  install(Vue) {
    Vue.prototype.log = (value) => { 
      if (process.env.NODE_ENV !== "production") {
        return console.log(value);
      }
    };
  },
};

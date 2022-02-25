function filterMenu(menuList, access, result = []) {
  menuList.forEach((menu) => {
    let newMenu = {};
    for (let k in menu) {
      if (k !== "children") {
        newMenu[k] = JSON.parse(JSON.stringify(menu[k]));
      }
    }
    console.log(newMenu);
    if (menu.children && menu.children.length) newMenu.children = [];
    result.push(newMenu);
    menu.children && filterMenu(menu.children, access, newMenu.children);
  });
  return result;
}

function includeArray(list1, list2) {
  let status = false;
  list2.forEach((item) => {
    if (list1.includes(item)) status = true;
  });
  return status;
}

export default {
  namespaced: true,
  state: {
    menu: [],
  },
  getters: {
    realMenu(state, getters, vx) {
      let access = vx.admin.user.userInfo.access;
      let menu = state.menu;
      return filterMenu(menu, access);
    },
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    },
  },
};

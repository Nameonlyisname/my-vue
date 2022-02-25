function filterMenu(menuList, access, result = []) {
  menuList.forEach((menu) => {
    let newMenu = {};
    let menuKeys = Object.keys(menu);
    for (let k in menu) {
      if (
        k !== "children" &&
        (!menuKeys.includes("access") || includeArray(menu.access, access))
      ) {
        newMenu[k] = JSON.parse(JSON.stringify(menu[k]));
      }
    }
    if (menu.children && menu.children.length) newMenu.children = [];
    Object.keys(newMenu).length && result.push(newMenu);
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

interface App {
  bNav?: false;
  bLoading?: false;
}

export const state = (): App => ({
  bNav: false,
  bLoading: false,
});

export const mutations = {
  setNav(state: { bNav: boolean }, payload: boolean) {
    state.bNav = payload;
  },
  setLoading(state: { bLoading: boolean }, payload: boolean) {
    state.bLoading = payload;
  },
};

export const getters = {
  getNav(state: { bNav: boolean }) {
    return state.bNav ? "show" : "hide";
  },

  getLoading(state: { bLoading: boolean }) {
    return state.bLoading ? "loading" : "no-loading";
  },
};

export const actions = {
  setUser(store: any) {
    store.commit("setNav", true);
  },
};

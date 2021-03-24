export interface User {
  name: string;
  age: number;
  sex: boolean;
}

export const state = () => ({
  user: null,
});

// 需要store.commit来调用(this.$store)
export const mutations = {
  setUser(state: { user: User }, payload: User) {
    state.user = payload;
  },
};

// 需要store.dispatch来调用(this.$store)
export const actions = {
  setUser(store: any) {
    store.commit("setUser", { name: "xiaomo", age: "28", sex: true });
  },
};

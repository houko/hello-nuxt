<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">hello-nuxt</h1>
      <div>{{ user }}</div>
      <div>{{ bNav }}</div>
      <div>{{ nav }}</div>
      <div>
        <button @click="setUser">setUser</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Action, Getter, Mutation, State } from "vuex-class";
import { User } from "~/store/user";

@Component
export default class Index extends Vue {
  @Prop() readonly error: string | undefined = undefined;

  @State((state) => state.bNav) bNav: boolean | undefined;

  @State("user") user?: User;

  @Getter("getNav") nav!: string;

  @Action("user/setUser") setUser!: (payload: User) => void;

  @Mutation("setNav") setNav!: (payload: boolean) => void;

  // computed计算属性=> 前面加上get
  // get xxx() {
  //   return user;
  // }
}
</script>

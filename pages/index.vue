<template>
  <div class='container'>
    <div>
      <Logo />
      <h1 class='title'>hello-nuxt</h1>
      <div> {{ bNav }}</div>
      <div> {{ nav }}</div>
      <div>
        <button @click='setUser'>setUser</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State, Getter, Action, Mutation } from 'vuex-class'


@Component
export default class Index extends Vue {
  @Prop() readonly error: string | undefined = undefined

  @State(state => state.bNav) bNav

  @State('user') user

  @Getter('getNav') nav

  @Action('user/setUser') setUser

  @Mutation('setNav') setNav

  get xxx() {
    return user
  }

}
</script>


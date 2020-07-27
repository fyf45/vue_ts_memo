<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MemoEditor v-if="$store.state.addShow" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";
import MemoEditor from "./components/MemoEditor.vue";
@Component({
  components: {
    MenuBar,
    ItemList,
    MemoEditor
  }
})
export default class App extends Vue {}
//将秒转化为时分秒

</script>

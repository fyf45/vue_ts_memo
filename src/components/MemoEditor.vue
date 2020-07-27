<template>
  <div class="memo-editor">
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control" type="text" placeholder="标题" v-model="memo.title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{$store.state.aHelper.getCategoryName(memo.cateGoryId)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="memo.cateGoryId=0">
              <a>工作</a>
            </li>
            <li @click="memo.cateGoryId=1">
              <a>生活</a>
            </li>
            <li @click="memo.cateGoryId=2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save" @click="bindSaveContent"></li>
          <li class="cancel" @click="bindCloseContent"></li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="memo.content"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from "../../model/ItemData";
@Component
export default class MemoEditor extends Vue {
  memo = new ItemData(-1, 0);
  created(): void {
    this.memo = this.$store.state.transMemo;
  }
  bindCloseContent() {
    this.$store.state.addShow = false;
  }
  bindSaveContent() {
    if (
      this.memo &&
      this.memo.cateGoryId > -1 &&
      this.memo.cateGoryId < 3 &&
      this.memo.title.length > 0 &&
      this.memo.content.length > 0
    ) {
      if (this.memo.id <= -1) {
        this.$store.state.aHelper.add(this.memo);
      } else {
        this.$store.state.aHelper.edit(this.memo);
      }
      this.$store.state.addShow = false;
    } else {
      window.alert("数据填写异常！");
    }
  }
}
</script>   

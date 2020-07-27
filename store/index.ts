import Vue from "vue";
import Vuex from "vuex";
import ActionHelper from './ActionHelper';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        title: "落霞与孤鹜齐飞秋水共长天一色",
        aHelper: new ActionHelper(),
        addShow: false,
        transMemo: null,
        filterCateId:1,
    },
    mutations: {
        showEditMemo(state: any, editMemo: any) {
            state.transMemo = editMemo;
            state.addShow = true;
        }
    }
})
export default store;
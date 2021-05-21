const state = {
    count: 100,
    text: "学习VUE3管理后台"
};
const getters = {
    getCount: state => {
        return state.count + 10;
    },
    getText: state => {
        return "我正在努力" + state.text
    }
}
const mutations = {
    SET_COUNT(state){
        state.count = 10;
    },
    SET_TEXT(state, playload){
        state.text = playload;
    }
}
const actions = {
    update_count(context){
        console.log(context);
        context.commit("SET_COUNT");
    },
    update_text({ commit }, playload){
        commit("SET_TEXT", playload);
    }
}
    

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
    
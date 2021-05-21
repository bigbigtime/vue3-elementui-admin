const state = {
    count: 100
};
const getters = {
    getCount: state => {
        return state.count + 10;
    },
    getText: state => {
        return "我正在努力" + state.text
    }
}
const mutations = {};
const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
    
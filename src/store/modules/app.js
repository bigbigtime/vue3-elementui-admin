const state = {
    collapse: false
};
const getters = {}
const mutations = {
    SET_AA(state){
        state.collapse = !state.collapse
    }
}
const actions = {}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
    
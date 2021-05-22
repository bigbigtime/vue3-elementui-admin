const state = {
    collapse: JSON.parse(sessionStorage.getItem('collapse')) || false
};
const getters = {}
const mutations = {
    SET_COLLAPSE(state){
        state.collapse = !state.collapse;
        sessionStorage.setItem("collapse", String(!state.collapse));
        // 或
        sessionStorage.setItem('collapse', JSON.stringify(state.collapse));
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
    
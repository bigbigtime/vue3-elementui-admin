//cookies
import { setToken, setUsername } from "@/utils/cookies";
const state = {
    collapse: JSON.parse(sessionStorage.getItem('collapse')) || false,
    token: "",
    username: ""
};
const getters = {}
const mutations = {
    SET_COLLAPSE(state){
        state.collapse = !state.collapse;
        sessionStorage.setItem("collapse", String(!state.collapse));
        // 或
        sessionStorage.setItem('collapse', JSON.stringify(state.collapse));
    },
    SET_TOKEN(state, value){ // 设置 token
        state.token = value;
        setToken(value);
    },
    SET_USERNAME(state, value){ // 设置用户名
        state.username = value;
        setUsername(value);
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
    
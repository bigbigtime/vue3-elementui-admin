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
    loginAction(context, repuestData) {
        return new Promise((resolve, reject) => {
            Login(repuestData).then((response) => { 
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        })
    }
}
    
    

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
    
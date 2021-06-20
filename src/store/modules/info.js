// api
import { GetCategory } from "@/api/info";;
const state = {};
const getters = {}
const mutations = {}
const actions = {
    categoryAction() {
        return new Promise((resolve, reject) => {
            GetCategory().then(response => {
                resolve(response.data)
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
    
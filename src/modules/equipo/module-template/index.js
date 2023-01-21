import * as actions from './actions'
import * as mutations from './getters'
import * as getters from './mutations'
import * as state from './state'

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default myCustomModule
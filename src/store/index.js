import {createStore} from "vuex";
import globalModule from "@/modules/shared/store/user";
import jugadorModule from "@/modules/jugador/store";


const store = createStore({
    modules: {
        globalModule,
        jugadorModule
    }
})

export default store
import torneoApi from "@/api/torneoApi";

export const loadEquipo = async ({commit}, id) => {

    const equipoApi = await torneoApi.get(`/equipo/${id}`);
    const jugadoresApi = await torneoApi.get(`/equipo/${id}/jugadores`);

    let equipo  = equipoApi.data;
    equipo.jugadores = jugadoresApi.data;

    commit('setEquipo', equipo)
}

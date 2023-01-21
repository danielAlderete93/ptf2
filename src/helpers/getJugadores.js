import torneoApi from "@/api/torneoApi";

const getJugadores = async (id) => {

    const jugadores = await torneoApi.get(`/equipo/${id}/jugadores`)
    return jugadores.data;
}

export default getJugadores
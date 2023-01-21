import torneoApi from "@/api/torneoApi";

const getEquipo = async (id) => {

    const equipo = await torneoApi.get(`/equipo/${id}`)

    return equipo.data;
}

export default getEquipo


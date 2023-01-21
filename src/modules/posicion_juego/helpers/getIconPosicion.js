/*todo: creditos
* <a href="https://www.flaticon.es/iconos-gratis/portero" title="portero iconos">Portero iconos creados por Culmbio - Flaticon</a>
*<a href="https://www.flaticon.es/iconos-gratis/jugador-de-futbol" title="jugador de fútbol iconos">jugador de fútbol iconos creados por Culmbio - Flaticon</a>
* <a href="https://www.flaticon.es/iconos-gratis/jugador-de-futbol" title="jugador de fútbol iconos">jugador de fútbol iconos creados por Culmbio - Flaticon</a>
* */

const baseUrlIcon = `~/assets/posicion/`
const getIcon = (nombre) => {
    const icon = String(nombre).toLowerCase()
    return require(`@/assets/posicion/${icon}.png`)
}

export default getIcon
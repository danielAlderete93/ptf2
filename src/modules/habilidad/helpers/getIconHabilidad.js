/*todo:
creditos
<a href="https://www.flaticon.es/iconos-gratis/cerebro" title="cerebro iconos">Cerebro iconos creados por berkahicon - Flaticon</a>
<a href="https://www.flaticon.es/iconos-gratis/guardia-de-seguridad" title="guardia de seguridad iconos">Guardia de seguridad iconos creados por POD Gladiator - Flaticon</a>
<a href="https://www.flaticon.es/iconos-gratis/copa-mundial" title="copa mundial iconos">Copa mundial iconos creados por Mr. GrayCat - Flaticon</a>
*
* */

const baseUrlIcon = `~/assets/habilidad/`
const getIcon = (nombre) => {
    const icon = String(nombre).toLowerCase()
    return require(`@/assets/habilidad/${icon}.png`)
}

export default getIcon
<template>
  <div class="text-start my-4 border-top py-4 ">
    <h2 class="fs-5 fw-bold">Posiciones de juego</h2>
    <div class="container">
      <div class="row text-center">
        <posicion-juego-details
            :es-preferida="true"
            :nombre="posicionFavorita.nombre"
            :descripcion="posicionFavorita.descripcion"
        />
        <posicion-juego-details
            :es-preferida="false"
            :nombre="posicionOpcional.nombre"
            :descripcion="posicionFavorita.descripcion"/>
      </div>
    </div>
  </div>
</template>
<script>
import PosicionJuegoDetails from "@/modules/posicion_juego/components/PosicionJuegoDetails"

export default {
  name: 'JugadorModalPosicionJuego',
  components: {PosicionJuegoDetails},
  props: {
    posicionFavorita: {},
    posicionOpcional: {}
  }
}
</script>
<style lang="scss" scoped>
h2 {
  color: #dcdcdc;
}


</style>
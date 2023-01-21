<template>
  <div class="text-start my-4 border-top py-4 ">
    <h2 class="fs-5 fw-bold">Habilidades</h2>

    <div class=" row text-center ">
      <template v-for="{
        tipoHabilidad,
        nombre,
        descripcion
      } in habilidades">
        <habilidad-details :descripcion="descripcion" :nombre="nombre" :tipo-habilidad="tipoHabilidad"/>
      </template>
    </div>
  </div>

</template>
<script>
import HabilidadDetails from "@/modules/habilidad/components/HabilidadDetails"

export default {
  name: 'jugador-modal-habilidades',
  components: {HabilidadDetails},
  props: {
    habilidades: {
      type: Object,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>

h2 {
  color: #dcdcdc;
}

ul {
  list-style: none;
}

</style>
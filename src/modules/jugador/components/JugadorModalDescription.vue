<template>

  <img class="img-fluid"
       src="https://bolavip.com/__export/1661890960835/sites/bolavip/img/2022/08/30/advincula_crop1661888884320.png_412320734.png"
       alt="...">

  <div class="text-start my-4 border-top  ">
    <h2 class="fs-5 fw-bold text-start py-4">Detalle jugador</h2>
    <p class="text-description my-2"><span>Nombre: </span> {{ nombre }}</p>
    <p class="text-description my-2"><span>Equipo: </span> {{ equipo }}</p>
    <p class="text-description my-2"><span>Fecha nacimiento: </span> {{ fechaNacimiento }}</p>
    <p class="text-description my-2"><span>Edad: </span> {{ edad }} años</p>
    <p class="text-description my-2"><span>Pierna: </span> {{ habilidadPiernas.toLowerCase() }}</p>
  </div>

</template>
<script>
export default {
  name: 'JugadorModalDescription',
  props: {
    edad: {},
    habilidadPiernas: {},
    fechaNacimiento: {},
    nombre: {},
    equipo: {}
  }
}
</script>
<style lang="scss" scoped>
h2 {
  color: #dcdcdc;
}

.text-description {
  text-transform: capitalize;
  color: #a8a9ad;

  & span {
    font-weight: bold;
    color: #dcdcdc;
  }
}

</style>
<template>
  <div class="col g-2">
    <button type="button" class="btn btn-primary btn-habilidad"
            data-bs-toggle="tooltip" data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-html="true"
            :data-bs-title="this.getHtmlDetails ">
      {{ this.nombre }}
    </button>
  </div>
</template>
<script>

export default {
  name: 'HabilidadDetails',
  props: {
    descripcion: {},
    nombre: {},
    tipoHabilidad: {}
  },
  computed: {
    getHtmlDetails() {
      return `
      <div>
      <p><strong>Tipo:</strong> ${this.tipoHabilidad.nombre}</p>
      <p><strong>Descripcion:</strong> ${this.tipoHabilidad.descripcion}</p>
      <hr>
      <p><strong>Habilidad:</strong> ${this.nombre}</p>
      <p><strong>Descripcion:</strong> ${this.descripcion}</p>
    </div>
      `

    }
  },
  mounted() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }
}
</script>
<style lang="scss" scoped>

.btn-habilidad {
  border-color: #008738;
  background-color: #122a1282;
  color: white;

  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  margin: 8px 0;
  width: 64px;
  height: 64px;
}

</style>
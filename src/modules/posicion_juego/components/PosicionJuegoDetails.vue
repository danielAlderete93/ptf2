<template>
  <div class="col my-2">
    <div class="card" :class="[esPreferida?'preferida':'opcional']">
      <div class="row ">
        <div class="col-md-4 align-self-center">
          <div class=" img-container">
            <img :src="icon" class="img-fluid" alt="icono">
          </div>
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ nombre }} </h5>
            <p><small> {{ esPreferida ? 'Favorita' : 'Opcional' }} </small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getIcon from "@/modules/posicion_juego/helpers/getIconPosicion";

export default {
  name: "PosicionJuegoDetails",
  data() {
    return {
      icon: null
    }
  },
  props: {
    nombre: {
      type: String,
      require: true
    },
    descripcion: {
      type: String,
      require: true
    },
    esPreferida: {
      type: Boolean,
      require: true
    }
  },
  mounted() {
    this.icon = getIcon(this.nombre)

  }
}
</script>

<style lang="scss" scoped>
.card-title {
  margin: auto;
  color: #ffffff;

}


img {
  margin: 8px 0;
  width: 64px;
}

.preferida {
  border: 2px solid #002110;


  & .card-body {
    background: #188150;
    color: #e3e2e6;

  }

}

.opcional {
  border: 2px solid #fa3838;

  & .card-body {
    background: #9e0025;
    color: #e3e2e6;
  }
}

</style>


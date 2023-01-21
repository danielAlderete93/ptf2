<template>
  <div class="card w-100 card-border">
    <img
        src="https://bolavip.com/__export/1661890960835/sites/bolavip/img/2022/08/30/advincula_crop1661888884320.png_412320734.png"
        class="card-img-top" alt="...">
    <div class="card-body text-center">
      <p class="card-text text-start  text-grey ">{{ posicion }}</p>
      <h4 class="card-title text-center my-2">{{ nombre }}</h4>
      <p class="card-text text-grey text-end"><sub>#{{ numero }}</sub></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JugadorDetailsCard',
  props: {
    posicion: {
      type: String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    numero: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped>
.card-border {
  border: 1px groove #0e210e;
  border-bottom: 5px solid black;

}

.card-title {
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 0;
}

.card-body {
  /*background: url("@/assets/backgrounds/background-gradient.png") 0 0;*/
  background: url("@/assets/backgrounds/background-black.png") 0 0;
  color: white;
  padding: 1.25rem 1.25rem;
}


tr {
  cursor: pointer;
  opacity: 1;
  transition: all .2s ease-in-out;
}

tr:hover {
  opacity: 0.5;
  transition: all .2s ease-in-out;
}


p {
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.text-grey {
  color: #c0c0c0;

}

</style>
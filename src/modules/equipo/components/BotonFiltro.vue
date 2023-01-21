<template>
  <button class="col-4 btn btn-posicion" :class="{ 'selected': this.isActive}" @click="setActive">
    {{ msgValue }}
  </button>
</template>
<script>
export default {
  name: 'boton-filtro',
  props: {
    msgValue: {
      type: String,
      required: true
    },
    startActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: this.startActive
    }
  },
  methods: {
    setActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>

.btn-posicion {
  background-color: #008738;
  border: 1px solid black;
  color: white;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;

  &:active {
    background-color: #f3ff00;
    border: 1px solid #008738;
    color: black;
  }

  &.selected {
    background-color: #f3ff00;
    border: 1px solid #008738;
    color: black;
  }

  img {
    padding: 2px;
    border-top: 1px solid white;
  }

  &.selected img {
    padding: 2px;
    border-top: 1px solid black;
  }
}

ul {
  list-style: none;
}


</style>
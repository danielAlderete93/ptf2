<template>
  <navContact/>
  <navBarPage/>
</template>
<script>

import {defineAsyncComponent} from "vue";


export default {
  name: 'navBarLayout',
  components: {
    NavBarPage: defineAsyncComponent(() => import("@/modules/shared/component/NavBarPage")),
    navContact: defineAsyncComponent(() => import("@/modules/shared/component/NavContact"))
  }

}
</script>
<style lang="scss" scoped>


</style>
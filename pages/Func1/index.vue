<template>
  <div>
    <Product />
  </div>
</template>

<script>
import Product from '@/components/Funct1/Product.vue'

export default {
  created() {
    this.$store.commit('O_Ccom/HomeChange', false)
    this.$store.commit('O_Ccom/PokemonChange', false)
    this.$store.commit('O_Ccom/F1hChange', true)
    this.$store.commit('O_Ccom/F2hChange', false)
    this.$store.commit('O_Ccom/F3hChange', false)
  },
  components: { Product },
  layout: 'Tabs',
  data() {
    return {
      pokemons: [],
    }
  },
  name: 'IndexPage',
}
</script>

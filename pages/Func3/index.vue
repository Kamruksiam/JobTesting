<template>
  <div>
    <SortArray v-show="$store.state.O_Ccom.Func3" />
  </div>
</template>

<script>
import SortArray from '@/components/Funct3/SortArray.vue'
export default {
  components: { SortArray },
  layout: 'Tabs',
  created() {
    this.$store.commit('O_Ccom/HomeChange', false)
    this.$store.commit('O_Ccom/PokemonChange', false)
    this.$store.commit('O_Ccom/F1hChange', false)
    this.$store.commit('O_Ccom/F2hChange', false)
    this.$store.commit('O_Ccom/F3hChange', true)
  },
  data() {
    return {
      pokemons: [],
    }
  },
  name: 'IndexPage',
}
</script>

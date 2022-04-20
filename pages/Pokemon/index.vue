<template>
  <div>
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from '@/components/Pokemon/PokemonList.vue'

export default {
  created() {
    this.$store.commit('O_Ccom/HomeChange', false)
    this.$store.commit('O_Ccom/PokemonChange', true)
    this.$store.commit('O_Ccom/F1hChange', false)
    this.$store.commit('O_Ccom/F2hChange', false)
    this.$store.commit('O_Ccom/F3hChange', false)
  },
  components: { PokemonList },
  layout: 'Tabs',
  data() {
    return {
      pokemons: [],
    }
  },
  name: 'IndexPage',
}
</script>

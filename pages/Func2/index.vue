<template>
  <div>
    <DateFormat />
  </div>
</template>

<script>
import DateFormat from '@/components/Funct2/DateFormat.vue'

export default {
  components: { DateFormat },
  layout: 'Tabs',
  created() {
    this.$store.commit('O_Ccom/HomeChange', false)
    this.$store.commit('O_Ccom/PokemonChange', false)
    this.$store.commit('O_Ccom/F1hChange', false)
    this.$store.commit('O_Ccom/F2hChange', true)
    this.$store.commit('O_Ccom/F3hChange', false)
  },
  data() {
    return {
      pokemons: [],
    }
  },
  name: 'IndexPage',
}
</script>

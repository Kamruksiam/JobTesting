<template>
  <div>
    <HomeForm />
  </div>
</template>

<script>
import HomeForm from '../components/Home/HomeForm.vue'

export default {
  created() {
    this.$store.commit('O_Ccom/HomeChange', true)
    this.$store.commit('O_Ccom/PokemonChange', false)
    this.$store.commit('O_Ccom/F1hChange', false)
    this.$store.commit('O_Ccom/F2hChange', false)
    this.$store.commit('O_Ccom/F3hChange', false)
  },
  components: { HomeForm },
  layout: 'Tabs',
  data() {
    return {
      pokemons: [],
    }
  },
  name: 'IndexPage',
}
</script>

<template>
  <div class="w-full">
    <div class="grid justify-items-center mt-20 mx-96">
      <div class="grid grid-cols-5 w-full">
        <div
          :class="
            $store.state.O_Ccom.Home == true
              ? 'text-3xl font-bold text-green-400 col-span-5 xl:col-span-1 mx-3 text-center'
              : 'text-3xl font-bold text-gray-800 col-span-5 xl:col-span-1 mx-3 text-center'
          "
          @click="Home"
        >
          Home
        </div>
        <div
          :class="
            $store.state.O_Ccom.Pokemon == true
              ? 'text-3xl font-bold text-green-400 col-span-5 xl:col-span-1 mx-3 text-center'
              : 'text-3xl font-bold text-gray-800 col-span-5 xl:col-span-1 mx-3 text-center'
          "
          @click="Pokemon"
        >
          Pokemon
        </div>
        <div
          :class="
            $store.state.O_Ccom.Func1 == true
              ? 'text-3xl font-bold text-green-400 col-span-5 xl:col-span-1 mx-3 text-center'
              : 'text-3xl font-bold text-gray-800 col-span-5 xl:col-span-1 mx-3 text-center'
          "
          @click="Funciton1"
        >
          Funciton 1
        </div>
        <div
          :class="
            $store.state.O_Ccom.Func2 == true
              ? 'text-3xl font-bold text-green-400 col-span-5 xl:col-span-1 mx-3 text-center'
              : 'text-3xl font-bold text-gray-800 col-span-5 xl:col-span-1 mx-3 text-center'
          "
          @click="Funciton2"
        >
          Funciton 2
        </div>
        <div
          :class="
            $store.state.O_Ccom.Func3 == true
              ? 'text-3xl font-bold text-green-400 col-span-5 xl:col-span-1 mx-3 text-center'
              : 'text-3xl font-bold text-gray-800 col-span-5 xl:col-span-1 mx-3 text-center'
          "
          @click="Funciton3"
        >
          Funciton 3
        </div>
      </div>
    </div>

    <nuxt />
  </div>
</template>
<script>
export default {
  setup() {},
  methods: {
    Home() {
      this.$store.commit('O_Ccom/HomeChange', true)
      this.$store.commit('O_Ccom/PokemonChange', false)
      this.$store.commit('O_Ccom/F1hChange', false)
      this.$store.commit('O_Ccom/F2hChange', false)
      this.$store.commit('O_Ccom/F3hChange', false)
      this.$router.push('/')
    },
    Pokemon() {
      this.$store.commit('O_Ccom/HomeChange', false)
      this.$store.commit('O_Ccom/PokemonChange', true)
      this.$store.commit('O_Ccom/F1hChange', false)
      this.$store.commit('O_Ccom/F2hChange', false)
      this.$store.commit('O_Ccom/F3hChange', false)
      this.$router.push('/Pokemon')
    },
    Funciton1() {
      this.$store.commit('O_Ccom/HomeChange', false)
      this.$store.commit('O_Ccom/PokemonChange', false)
      this.$store.commit('O_Ccom/F1hChange', true)
      this.$store.commit('O_Ccom/F2hChange', false)
      this.$store.commit('O_Ccom/F3hChange', false)
      this.$router.push('/Func1')
    },
    Funciton2() {
      this.$store.commit('O_Ccom/HomeChange', false)
      this.$store.commit('O_Ccom/PokemonChange', false)
      this.$store.commit('O_Ccom/F1hChange', false)
      this.$store.commit('O_Ccom/F2hChange', true)
      this.$store.commit('O_Ccom/F3hChange', false)
      this.$router.push('/Func2')
    },
    Funciton3() {
      this.$store.commit('O_Ccom/HomeChange', false)
      this.$store.commit('O_Ccom/PokemonChange', false)
      this.$store.commit('O_Ccom/F1hChange', false)
      this.$store.commit('O_Ccom/F2hChange', false)
      this.$store.commit('O_Ccom/F3hChange', true)
      this.$router.push('/Func3')
    },
  },
}
</script>

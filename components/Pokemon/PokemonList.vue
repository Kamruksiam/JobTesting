<template>
  <div>
    <div class="xl:m-20 m-10 bg-gray-200 rounded-lg">
      <div class="grid grid-cols-12" v-if="skeleton">
        <div
          v-for="count of 104"
          :key="count"
          class="xl:col-span-2 col-span-3 grid justify-items-center my-10"
        >
          <div class="bg-gray-300 w-48 h-48 animate-pulse"></div>
          <div class="rounded-lg bg-gray-300 w-48 h-8 mt-4 animate-pulse">
            <div class="text-2xl text-white font-bold text-center"></div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12" v-if="skeleton == false">
        <div
          v-for="item in monters.slice(0, 104)"
          :key="item.image"
          class="xl:col-span-2 col-span-3"
        >
          <div class="my-10 grid justify-items-center w-full">
            <img :src="item.image" class="w-40 h-40" />
            <div class="rounded-lg bg-gray-900 w-60 h-8 mt-4">
              <div class="text-2xl text-white font-bold text-center">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pokemons: [],
      monters: [],
      skeleton: true,
    }
  },
  setup() {},
  async fetch() {
    this.pokemons = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=1126'
    ).then((res) => res.json())

    // let e = await fetch(
    //   ''
    // ).then((res) => res.json())
    for (const key in this.pokemons.results) {
      //   console.log(this.pokemons.results[key].url)
      let mon = await fetch(this.pokemons.results[key].url).then((res) =>
        res.json()
      )
      this.monters.push({
        name: this.pokemons.results[key].name,
        image: mon.sprites.other.dream_world.front_default,
      })
    }
    this.skeleton = false
  },
}
</script>

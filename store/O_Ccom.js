export const state = () => ({
  Home: true,
  Pokemon: false,
  Func1: false,
  Func2: false,
  Func3: false,
})
export const mutations = {
  HomeChange(state, data) {
    state.Home = data
  },
  PokemonChange(state, data) {
    state.Pokemon = data
  },
  F1hChange(state, data) {
    state.Func1 = data
  },
  F2hChange(state, data) {
    state.Func2 = data
  },
  F3hChange(state, data) {
    state.Func3 = data
  },
}

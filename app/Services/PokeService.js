import Store from "../store.js";
import Pokemon from "../Models/Pokemon.js";
import store from "../store.js";
let _sandbox =axios.create ({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/Devyn/pokemon",
    timeout: 3000
});
let _pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 3000
});

class PokeService {

    async releaseAsync() {
        let res = await _sandbox.delete(store.State.currentPokemon._id);
        store.commit("currentPokemon", {})
        this.getMyPokeAsync();
    }

    pullCaught(id){
        let caughtPokemon = store.State.caughtPokemon.find(e => e._id == id);
        store.commit("currentPokemon", caughtPokemon)
    }

    async catchAsync() {
        let currentPokemon = store.State.currentPokemon;
        let res = await _sandbox.post("", currentPokemon)
        this.getMyPokeAsync()
    }

    async getMyPokeAsync() {
        let res = await _sandbox.get("");
        store.commit("caughtPokemon", res.data.data.map(pokeData => new Pokemon(pokeData)))
    }

    async pickPokemonAsync(name) {
        let res = await _pokeApi.get("pokemon/" + name);
        let pickedPokemon = new Pokemon(res.data);
        store.commit("currentPokemon", pickedPokemon);
        console.log("from store", store.State.currentPokemon)
        
    }

    async searchAsync(name) {
        console.log("service")
        let res = await _pokeApi.get("pokemon/" + name);
        let activePokemon = new Pokemon(res.data)
        Store.commit("currentPokemon", activePokemon);
    }
    async getPokeListAsync(name) {
        let res = await _pokeApi.get("pokemon");
        Store.commit("pokemon", res.data.results);
        
    }
    async selectPokemonAsync(name) {
        let res = await _pokeApi.get("pokemon/" + name);
        let activePokemon = new Pokemon(res.data);
        Store.commit("currentPokemon", activePokemon)
    }


}

const service = new PokeService();
export default service;

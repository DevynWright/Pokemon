import Store from "../store.js";

let _pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

class PokeService {
    async searchAsync(name) {
        console.log("service")
        let res = await _pokeApi.get("pokemon/" + name);
        Store.commit("currentPokemon", res.data);
    }
    async getPokeListAsync(name) {
        let res = await _pokeApi.get("pokemon");
        Store.commit("pokemon", res.data.results);
    }



}

const service = new PokeService();
export default service;

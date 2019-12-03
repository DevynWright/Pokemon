import Store from "../store.js";

let _pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

class PokeService {
    async searchAsync(name) {
        console.log("service")
        let res = await _pokeApi.get("pokemon/" + name);
        Store.commit("pokemon", res.data);
    }



}

const service = new PokeService();
export default service;

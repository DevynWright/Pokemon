import PokeService from "../Services/PokeService.js";
import store from "../store.js";

//Private
function _draw() {
let template = "";
store.State.pokemon.forEach(pokemon =>{
    console.log(pokemon);
    template += pokemon.template;
  });
  document.getElementById("searchedPokemon").innerHTML = template;
}

function _drawOne(){
  console.log(store.State.currentPokemon)
}

//Public
export default class PokeController {
  constructor() {
    store.subscribe("pokemon", _draw);
    store.subscribe("currentPokemon", _drawOne);
    PokeService.getPokeListAsync()
  }
  async search() {
    event.preventDefault();
    console.log("controller")
    let form = event.target;
    // @ts-ignore
    let name = form.name.value;
    try {
      await PokeService.searchAsync(name);
    } catch (e) {
      console.error(e)
    }
  }




}

import PokeService from "../Services/PokeService.js";
import store from "../store.js";

//Private
function _draw() {
  //let template = "";
 //store.State.pokemon.forEach(pokemon =>{
  //   template += pokemon.template;
  // })
  let pokemon = store.State.pokemon;
  console.log(pokemon);
}

//Public
export default class PokeController {
  constructor() {
    store.subscribe("pokemon", _draw);
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

import PokeService from "../Services/PokeService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = "";
  let pokemon = store.State.pokemon;
  pokemon.forEach(pokemon => template += `<li onclick = "app.pokeController.pickPokemon('${pokemon.name}')">${pokemon.name}</li>`
  );
  document.getElementById("listPokemon").innerHTML = template;
}
function _drawCaughtPokemon() {
  let template = "";
  let caughtPokemon = store.State.caughtPokemon;
  caughtPokemon.forEach(pokemon => template += `<li onclick = "app.pokeController.pullCaught('${pokemon._id}')">${pokemon.name}</li>`
  );
  document.getElementById("myPoke").innerHTML = template;
}

function _drawCurrentPokemon(){
  let pokemon = store.State.currentPokemon;
  if(pokemon._id){
    document.getElementById("currentPokemon").innerHTML = pokemon.Template;
    return
  }
  document.getElementById("currentPokemon").innerHTML = "";


}

//Public
export default class PokeController {
  constructor() {
    store.subscribe("pokemon", _draw);
    store.subscribe("currentPokemon", _drawCurrentPokemon);
    store.subscribe("caughtPokemon", _drawCaughtPokemon)
    PokeService.getPokeListAsync()
    PokeService.getMyPokeAsync()
  }
  
pullCaught(id) {
  PokeService.pullCaught(id)
}

async release() {
  try {
    await PokeService.releaseAsync()
  } catch (error) {
    console.error(error);
  }
}

async pickPokemon(name) {
  try {
    await PokeService.pickPokemonAsync(name)
  } catch (e) {
    console.error(e)
  }
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

  async selectPokemon(name) {
    try {
      await PokeService.selectPokemonAsync(name);
    } catch (error) {
      console.error(error)
  }
  }
  async catch() {
    try {
      await PokeService.catchAsync()
    } catch (error) {
      console.error(error)
    }
  }


}

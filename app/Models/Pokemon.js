export default class Pokemon {
    constructor(data) {
        this._id = data._id || ""
        this.name = data.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
    }

    get Template() {
        return /*html*/ `
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="${this.name} sprite">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Height:${this.height}, Weight:${this.weight}</p>
            <button onclick= "app.pokeController.catch()" class="btn btn-primary">Catch it</button>
            </div>
        </div>
        `
    }
}
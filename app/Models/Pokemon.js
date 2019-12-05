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
        let template = `
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="${this.name} sprite">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">Height:${this.height}, Weight:${this.weight}</p>
            `
            if (this._id){
                template += `<button onclick= "app.pokeController.release()" class="btn btn-danger">Release it</button>`
            } else {
                template += `<button onclick= "app.pokeController.catch()" class="btn btn-primary">Catch it</button>`
            }
            template += `</div>
        </div>`
        return template;
    }
}
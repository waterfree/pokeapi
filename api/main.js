//asi se conectan 2 js
import { buscarPokemon, buscarPokemonPorNombre } from "./controllers/controllers.js"
let root = document.getElementById("root")
//buscarPokemon()
//saludar()
/* EJEMPLO*/
let previousURL = ""
let nextURL = ""

async function mostrarPokemones(url) {
    let objetoPokemon = await buscarPokemon(url)
    previousURL = objetoPokemon.previous
    nextURL = objetoPokemon.next

    root.innerHTML = "CARGANDO"

    console.log("Boton prev", previousURL)
    console.log("Boton next", nextURL)

    let html = ""
    objetoPokemon.arrayDePokemones.forEach((pokemon) => {

        let cardPokemon = `<div class='card'> 
                            <span>${pokemon.nombre}</span>
                            <span>${pokemon.id}</span>
                            <span>${pokemon.tipos[0].type.name}</span>
                            <img class='card-image' src='${pokemon.imagen}'>
                        </div>`

        //root.innerHTML += cardPokemon 
        html += cardPokemon
    });
    root.innerHTML = html
}
mostrarPokemones()

//add event listener que va ver que escribo en el input y ejecuta el buscar por nombre


let botonDeBusqueda = document.getElementById("buscar-pokemon")
let barraDeBusqueda = document.getElementById("barra-pokemon")
//console.log(barraDeBusqueda)
botonDeBusqueda.addEventListener("click", async function () {
    event.preventDefault()//evito que se refresque la pagina despues de click
    //console.log(barraDeBusqueda.value)
    let pokemonBuscado = await buscarPokemonPorNombre(barraDeBusqueda.value)

    let cardPokemon = `<div class='card'> 
                            <span>${pokemonBuscado.nombre}</span>
                            <span>${pokemonBuscado.id}</span>
                            <span>${pokemonBuscado.tipos[0].type.name}</span>
                            <img class='card-image' src=${pokemonBuscado.imagen}>
                        </div>`

    root.innerHTML = cardPokemon
})

let previousBtn = document.getElementById("previous")
let nextBtn = document.getElementById("next")

previousBtn.addEventListener("click", async ()=>{
    console.log("click en prev")
    mostrarPokemones(previousURL)
})

nextBtn.addEventListener("click", async ()=>{
    console.log("click en next")
    mostrarPokemones(nextURL)  
})
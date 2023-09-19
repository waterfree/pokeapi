export function saludar() {
    console.log("Hola soy Nestor Aguas")
}
//Llamados a la api
export async function buscarPokemon(url) {

    //const defaultUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20"
    let urlParaBuscar = url || `https://pokeapi.co/api/v2/pokemon/`
    console.log("URL para buscar: ", urlParaBuscar)
    let data = await fetch(urlParaBuscar)
    let dataParseada = await data.json() //{}results

    console.log(dataParseada.results)
    //return dataParseada.results //[{url,name},{},{}]
    let arrayDePokemones = []
    for (let i = 0; i < dataParseada.results.length; i++) {
        const pokemon = dataParseada.results[i];

        //console.log("i=",i)
        //console.log("Poquemon que estamos iterando: ", pokemon.url)
        let pokemonData = await fetch(pokemon.url)//https://pokeapi.co/api/v2/pokemon/1/
        let pokemonParseado = await pokemonData.json()//{}
        //console.log(pokemonParseado)

        let pokemonFormateado = {
            id: pokemonParseado.id,//number
            nombre: pokemonParseado.name,//string
            tipos: pokemonParseado.types,//[]
            imagen: pokemonParseado.sprites.other.dream_world.front_default//string
        }
        //console.log(pokemonFormateado)
        arrayDePokemones.push(pokemonFormateado)
    }
    return {

        previous: dataParseada.previous,
        next: dataParseada.next,
        arrayDePokemones: arrayDePokemones//[{},{},{}]

    }
}

export async function buscarPokemonPorNombre(nombre) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    let pokemonParseado = await data.json() //{}results
    //console.log(dataParseada)

    let pokemonFormateado = {
        id: pokemonParseado.id,//number
        nombre: pokemonParseado.name,//string
        tipos: pokemonParseado.types,//[]
        imagen: pokemonParseado.sprites.other.dream_world.front_default//string
    }
    //console.log(pokemonFormateado)
    return pokemonFormateado
}

export async function paginaSiguiente() { }

export async function paginaAnterior() { }

/* Ejecuciones de prueba */

//saludar()
//buscarPokemon()
//buscarPokemonPorNombre("ditto")
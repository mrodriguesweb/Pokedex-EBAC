/* const page = document.querySelector('#pokedex-page')

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        return response.json()
    })
    .then(async data => {
        const box = document.querySelector('#pokemon-box')
        page.innerHTML = ''

        for(let i = 0; i < data.results.length; i++) {
            box.querySelector('#pokemon-name').innerHTML = data.results[i].name
            box.querySelector('#pokemon-name').style.textTransform = "capitalize"

             const pokemonType = await fetch('https://pokeapi.co/api/v2/type/' + data.results[i].name)
            const type = await pokemonType.json()
            box.querySelector('#pokemon-type').innerHTML = data.results[i].name 

            const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name)
            const image = await pokemonImage.json()
            box.querySelector('#pokemon-img').src = image.sprites.front_default

            page.innerHTML += box.outerHTML
        }
    }) */

const div = document.createElement('div')
div.innerHTML = 'Criando uma pokedex'
console.log(div)

const colorTypes = {
  grass: "#90EE90",
  poison: "#9370DB",
  water: "#87CEFA",
  fire: "#FFA500",
  flying: "#00BFFF",
  bug: "#9ACD32",
  normal: "#C0C0C0",
  electric: "#FFFF00",
  ground: "#EEE8AA",
  fairy: "#FFE4E1",
  fighting: "#D2691E",
  psychic: "#EE82EE",
  rock: "#CD853F",
  steel: "#778899",
  ice: "#00CED1",
  ghost: "#7B68EE",
  dragon: "#FA8072",
  default: "#FFFFFF"
}

const page = document.querySelector('#pokedex-page')
page.appendChild(div)

fetch('https://pokeapi.co/api/v2/pokemon?limit=150') // Efetua a requisição
  .then(response => {
    return response.json() // Transforma o response em um arquivo json, então assim retorna uma promise
  })
  .then(async data => {   // Verifico o recebimento, ou seja, se está consumindo os dados da pokeapi.co
    const box = document.querySelector('#pokemon-box')

    page.innerHTML = ''

    for (let i = 0; i < data.results.length; i++) {
      box.querySelector('#pokemon-name').innerHTML = data.results[i].name
      box.querySelector('#pokemon-name').style.textTransform = "capitalize"

      const pokemonName = data.results[i].name

      const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + pokemonName)
      const image = await pokemonImage.json()
      box.querySelector('#pokemon-img').src = image.sprites.front_default

      const pokemonInfo = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
      const info = await pokemonInfo.json()

      box.querySelector('#pokemon-type').innerHTML = ''
      for (let x = 0; x < info.types.length; x++) {
        const nameType = document.createElement("span")
        nameType.appendChild(document.createTextNode(info.types[x].type.name))
        nameType.style.backgroundColor = colorTypes[info.types[x].type.name]
        nameType.style.padding = "4px"
        nameType.style.margin = "2px"
        nameType.style.borderRadius = "4px"
        box.querySelector('#pokemon-type').appendChild(nameType)
      }

      page.innerHTML += box.outerHTML

    }

  })
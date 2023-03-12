class GhibliAPI {
    constructor() {
      this.baseURL = 'https://pokeapi.co/api/v2/';
    }
  
    async searchPokemon(name) {
      try {
        const response = await fetch(`${this.baseURL}pokemon/${name}`);
        const data = await response.json();
        console.log(`Nombre: ${data.name}, ID: ${data.id}, Tipos: ${data.types.map(type => type.type.name)}`);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  
    showPokemonImage(data) {
      const img = document.createElement('img');
      img.src = data.sprites.front_default;
      document.body.appendChild(img);
    }
  }
  
  const ghibliAPI = new GhibliAPI();
  
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', () => {
    const name = prompt('Ingrese el nombre del pokemon a buscar');
    const data = ghibliAPI.searchPokemon(name);
    data.then(pokemonData => ghibliAPI.showPokemonImage(pokemonData));
  });
  
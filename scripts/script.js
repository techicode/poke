const searchInput = document.querySelector('#search-poke');
const searchButton = document.querySelector('#search-button');
const pokeImg = document.querySelector('#poke-img');
const pokeName = document.querySelector('#poke-name');



const getData = async () => {
    const pokemon = await getPoke(searchInput.value);
    pokeName.innerHTML = pokemon.data.name.toUpperCase();
    pokeImg.src = pokemon.data.sprites.front_default;
}

const getPoke = async (pokeID) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`);
}

const backImg = async () => {
    const pokemon = await getPoke(searchInput.value);
    pokeImg.src = pokemon.data.sprites.back_default;
}

searchButton.addEventListener('click', getData);
pokeImg.addEventListener('mouseover', backImg);
pokeImg.addEventListener('mouseleave', getData);
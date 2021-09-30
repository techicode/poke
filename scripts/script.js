const searchInput = document.querySelector('#search-poke');
const searchButton = document.querySelector('#search-button');
const pokeImg = document.querySelector('#poke-img');
const pokeName = document.querySelector('#poke-name');
const barhp = document.querySelector('.hp-bar');


let pokemon = {};


const getPoke = async (pokeID) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`);
}

const getData = async () => {
    pokemon = await getPoke(searchInput.value.toLowerCase());
    pokemon = pokemon.data;
    getInfo(pokemon);
}

const getInfo = (pokemon) => {
    frontImg();
    document.querySelector('#poke-types').innerHTML = '';
    pokeName.innerHTML = pokemon.name.toUpperCase();
    let pokeNumber = pokemon.id.toString().padStart(3, "0");
    document.querySelector('#poke-number').innerText = `#${pokeNumber}`;
    document.querySelector('#hp-data').textContent = pokemon.stats[0].base_stat;
    document.querySelector('#attack-data').textContent = pokemon.stats[1].base_stat;
    document.querySelector('#defense-data').textContent = pokemon.stats[2].base_stat;
    document.querySelector('#spatk-data').textContent = pokemon.stats[3].base_stat;
    document.querySelector('#spdef-data').textContent = pokemon.stats[4].base_stat;
    document.querySelector('#speed-data').textContent = pokemon.stats[5].base_stat;
    document.querySelector('.hp-bar').style.width = `${pokemon.stats[0].base_stat}%`
    document.querySelector('.attack-bar').style.width = `${pokemon.stats[1].base_stat}%`
    document.querySelector('.defense-bar').style.width = `${pokemon.stats[2].base_stat}%`
    document.querySelector('.spatk-bar').style.width = `${pokemon.stats[3].base_stat}%`
    document.querySelector('.spdef-bar').style.width = `${pokemon.stats[4].base_stat}%`
    document.querySelector('.speed-bar').style.width = `${pokemon.stats[5].base_stat}%`

    for (let type of pokemon.types) {
        document.querySelector('#poke-types').innerHTML +=
            `<img class="icon ${type.type.name}" src="https://duiker101.github.io/pokemon-type-svg-icons/icons/${type.type.name}.svg"
                             alt="">`
    }
}

const frontImg = () => {
    pokeImg.src = pokemon.sprites.front_default;
}

const backImg = () => {
    pokeImg.src = pokemon.sprites.back_default;
}

const getRandomPoke = async () => {
    pokemon = await getPoke(Math.floor(Math.random() * 151) + 1);
    pokemon = pokemon.data;
    getInfo(pokemon);
}

getRandomPoke();


searchButton.addEventListener('click', getData);
pokeImg.addEventListener('mouseover', backImg);
pokeImg.addEventListener('mouseleave', frontImg);
const pokemonName = document.querySelector('.pokename');

async function getPokemon()
{
    console.log("Working");
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    console.log(data.results);
    doStuff(data.results);
}

function doStuff(data){

    data.forEach(pokemon => {
        const div = document.createElement('div')
        div.innerHTML = pokemon.name;
        document.body.appendChild(div);
        console.log(pokemon.name);
    });
    
}

getPokemon();


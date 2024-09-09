const pokemonName = document.querySelector('.pokename');
const br = document.createElement('br');
let num = 0;


async function getPokemon()
{
    console.log("Working");
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2');
    const data = await response.json();
    console.log(data.results);
    doStuff(data.results);
}



function doStuff(data){

    data.forEach(pokemon => {
        const div = document.createElement('div')
        const button = document.createElement('button');
        button.style.width = '100px';
        button.style.height = '25px';


        button.textContent = pokemon.name;
        div.innerHTML = pokemon.name;

        document.body.appendChild(div);
        document.body.appendChild(button);

        console.log(pokemon.name);
        console.log("url", pokemon.url);

        let url = pokemon.url;
        button.addEventListener('click', () => {
            specificPokemon(url);
        })
    }); 
}


async function specificPokemon(url)
{

    console.log 
            const response2 = await fetch(url);
            const specific = await response2.json(); 
            console.log(specific.forms.name);
}



getPokemon();


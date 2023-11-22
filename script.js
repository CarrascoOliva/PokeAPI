window.onload = function() {
    var maxPokemon = 1008; // Número total de Pokémon hasta la fecha
    var randomId = Math.floor(Math.random() * maxPokemon) + 1; // Generar un ID aleatorio

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonName').innerText = data.name;
            document.getElementById('pokemonId').innerText = `# ${data.id}`;
        })
        .catch(error => console.error(error));
}
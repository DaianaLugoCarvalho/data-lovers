window.onload = function () {
  showPokemons();
};


function getPokemons() {
  arrayResult = POKEMON["pokemon"];
  return arrayResult;
}

let arrayResult = [];

function showPokemons() {
  let pokemonsDiv = document.getElementById("pokemons-div");
  pokemonsDiv.innerHTML = `
  ${getPokemons().map((pokemon) => `
  <div class="pokemon-item">
      <img src="${pokemon["img"]}" class="pokemon-img" />
      <div class="text-name">
      <h3 class="pokemon-name">${pokemon["name"]}</h3>
      </div>
      <div class="text-number">
      <p>${pokemon["num"]}</p>
      </div>
  </div>
`)
    }`
}

function sortByName() {
  arrayResult = arrayResult.sort(a,b);
  let nameAtual = a.name.type.toLowerCase();
  let namePosterior = b.name.type.toLowerCase();

  if (nameAtual < namePosterior){
    return -1;
  }
  if (nameAtual > namePosterior){
    return 1
  }
  return 0;
};
 
document.getElementsByClassName(ordination).addEventListener('change', function (event) {
  if (event.target.value === 'a-z') {
    sortByName();
  } else if (event.target.value === 'z-a') {
    showPokemons(arrayResult.sortByName.reverse());
  } else {
    sortByName();
  }
})


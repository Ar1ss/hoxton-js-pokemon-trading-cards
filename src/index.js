// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function cratePokemonCard(pokemonItem) {
  let liEl = document.createElement("li");
  liEl.className = "card";

  let h2El = document.createElement("h2");
  h2El.className = "card--title";
  h2El.textContent = data[0].name;

  let imgEl = document.createElement("img");
  imgEl.className = "card--img";
  imgEl.src = data[0].sprites.other["official-artwork"].front_default;
  imgEl.width = 256;

  let ulEl = document.createElement("ul");
  ulEl.className = "card--text";

  let liEl2 = document.createElement("li");

  liEl.append(h2El, imgEl);
  ulEl.append(liEl2);

  let pocemonUl = document.querySelector(".cards");
  pocemonUl.append(liEl, ulEl);
}

cratePokemonCard(data[1]);

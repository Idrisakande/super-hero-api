// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "114703638015611";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const superHeroImageDiv = document.getElementById("superHeroImage");
const randomHeroButton = document.getElementById("randomHeroButton");
const searchHeroButton = document.getElementById("searchHeroButton");
const searchInput = document.getElementById("searchInput");

const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.powerstats);
      let superHero = json;
      showHeroInfo(superHero);
    });
};

randomHeroButton.onclick = () => getSuperHero(getRandomHeronumber());

const getRandomHeronumber = () => {
  let = numberOfHeros = 731;
  let = randomHeroNumber = Math.floor(Math.random() * numberOfHeros) + 1;
  return randomHeroNumber;
};

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      let hero = json.results[0];
      showHeroInfo(hero);
    });
};

searchHeroButton.onclick = () => getSearchSuperHero(searchInput.value);

const statToEmoji = {
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♂️",
  power: "📊",
  combat: "⚔️",
};

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`;
  const img = `<img src='${character.image.url}' height=235 width=250/>`;
  let stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]
        }</p>`;
    })
    .join("");
  superHeroImageDiv.innerHTML = `${name}${img}${stats}`;
  // console.log(stats.join(''))
  // return stats.join('')
};

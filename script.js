const nextBtn = document.querySelector('#next'),
      addBtn = document.querySelector('#add'),
      heroCardtext = document.querySelector(".card-text"),
      heroCardImg = document.querySelector(".card-img-top"),
      heroContainer = document.querySelector(".container");
const startIndex = 0;


class Hero {
    constructor(name, powers, img) {
        this.name = name;
        this.powers = powers;
        this.img = img;
    }   
}

const heroes = [
    new Hero('Storm', ['WetherControl', 'flying'], "https://s-media-cache-ak0.pinimg.com/736x/63/f1/aa/63f1aaadcbf4941d347d9e672b444f59.jpg"),
    new Hero('BlackPanther',['EnhancedStrength', 'Speed'], "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png" ),
    new Hero('CaptainAmerica',['SuperSoldier', 'CombatSkills'], "https://www.artmajeur.com/medias/standard/b/e/benny-arte/artwork/12974891_capitain-america.jpg"),
    new Hero('Batman',['advancedTechnologies', 'Armor'], 'https://reel360.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-29-at-8.22.27-AM.jpg'),
    new Hero('Spiderman',['WebMaking', 'Jumping'], "https://cdn.vox-cdn.com/thumbor/K5IUSjv1ArPfjh_IZUp4DPsoZMY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22024938/marvels_spiderman_remastered_screenshot_01_disclaimer_en_01oct20.png"),
];
let currentHeroes = localStorage.getItem('currentHeroes')
currentHeroes = JSON.parse(currentHeroes)
let stringArray = JSON.stringify(heroes) //only than the storage gets the data - complex data requires stringify
localStorage.setItem('currentHeroes', stringArray)

function insertHeroesToDisplay(event) {
    let counter = 0;
    for(const hero of heroes) {
        let row = document.createElement('div')
        row.classList.add('row')
        for(i=0; i< 3 && i<heroes.length && counter< heroes.length; i++, counter++)
        {row.insertAdjacentHTML("beforeend", `
        <div class="col-6 col-md-4"><div class="card" style="width: 18rem;">
        <img src= "${heroes[counter].img}" class="card-img-top"/>
        <div class="card-body">
          <p class="card-text"> ${heroes[counter].name} ${heroes[counter].powers}</p>
      </div>
        `)}
        heroContainer.appendChild(row)};
    }

insertHeroesToDisplay();


    nextBtn.addEventListener('click', function () {
        startIndex = startIndex + 6 > imgArr.length -1 ? startIndex : startIndex + 6;
        render();
    });


//getting Galits' file
window.onload = function() {
    addBtn.addEventListener("click", function(e){
        e.preventDefault();
        addNewHero();
    })
}

function addNewHero(){
    location.href = "index2.html";
}

// let newHeroString = localStorage.getItem('Hero');

// newHero = JSON.parse(newHeroString);

// let newHerosString = localStorage.getItem('Heros');

// let heros = JSON.parse(newHerosString);
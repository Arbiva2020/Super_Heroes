
const showListBtn = document.querySelector("#showList");

window.onload = function () {
    showListBtn.addEventListener("click", function (e) {
        e.preventDefault();
        goToListPage();
    })
}

function goToListPage(){
    location.href = 'index1.html';

const nextBtn = document.querySelector('#next'),
      addBtn = document.querySelector('#add'),
      imgDiv = document.querySelector("#photoholder"),
      img = document.querySelector("#imgAddress");
const startIndex = 0;

window.onload = function() {
    addBtn.addEventListener("click", function(e){
        e.preventDefault();
        addNewHero();
    })
}

function addNewHero(){
    location.herf = "index2.html";
}


class Hero {
    constructor(name, powers, img) {
        this.name = name;
        this.powers = powers;
        this.img = img;
    }   
}

const hero = [
    new hero(Storm, [WetherControl, flying], url="https://s-media-cache-ak0.pinimg.com/736x/63/f1/aa/63f1aaadcbf4941d347d9e672b444f59.jpg"),
    new hero(BlackPanther,[EnhancedStrength, Speed], url="https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png" ),
    new hero(CaptainAmerica,[SuperSoldier, CombatSkills], url="https://www.artmajeur.com/medias/standard/b/e/benny-arte/artwork/12974891_capitain-america.jpg"),
    new hero(Batman,[advancedTechnologies, Armor], url='https://reel360.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-29-at-8.22.27-AM.jpg'),
    new hero(Spiderman,[WebMaking, Jumping], url="https://cdn.vox-cdn.com/thumbor/K5IUSjv1ArPfjh_IZUp4DPsoZMY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22024938/marvels_spiderman_remastered_screenshot_01_disclaimer_en_01oct20.png"),
];
const heroToDisplay = [];



function updateHedroesCard() {
    for(const hero of heroes) {
        heroCard.innerHTML += `<card>
        <div scope="card">${hero.name}</div>
        <div>${hero.powers['${value}']}</div>
        <div>${hero.img}</div>
      </card>`;
    }

}
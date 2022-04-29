// import functions and grab DOM elements
const climateSelect = document.getElementById('climate-select');
const climatePhoto = document.getElementById('newDay');

const architectureSelect = document.getElementById('architecture-select');
const architecturePhoto = document.getElementById('buildingArc');

const coastlineSelect = document.getElementById ('coastline-select');
const coastlinePhoto = document.getElementById ('coastperk');

const sloganInput = document.getElementById('slogan-input');
const sloganBtn = document.getElementById('slogan-btn');
const sloganList = document.getElementById('slogan-list');

// let state
let climate = 0;
let architecture = 0;
let coastline = 0;

let slogan = [];
// set event listeners 
climateSelect.addEventListener('change', () => {
    console.log('changing climate', climateSelect.value);
    climatePhoto.src = `./assets/${climateSelect.value}-climate.png`;
    climatePhoto.style.backgroundImage = `url('./assets/${climateSelect.value}-climate.png')`;
    climate++;
});

architectureSelect.addEventListener('change', () => {
    console.log('changing architecture', architectureSelect.value);
    architecturePhoto.src = `./assets/${architectureSelect.value}-architecture.png`;
    architecturePhoto.style.backgroundImage = `url('./assets/${architecturePhoto.value}-architecture.png')`;
    architecture++;
});

coastlineSelect.addEventListener('change', () => {
  console.log('changing coastline', coastlineSelect.value);
  coastlinePhoto.src = `./assets/${coastlineSelect.value}-coastline.png`;
  coastlinePhoto.style.backgroundImage = `url('./assets/${coastlinePhoto.value}-coastline.png')`;
  coastline++;
});


sloganInput.addEventListener('click', () => {
    slogan.push(sloganList.value);
    displaySlogans();
});

function displaySlogans() {
    sloganInput.textContent = '';
    for (let slogan of slogans) {
        const p = document.createElement ('p');
        p.textContent = slogan;
        slogan.append(p);
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
    }
}
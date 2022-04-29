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
const list = document.getElementById('list');
const timesChanged = document.getElementById('timesChanged');

// let state
let climate = 0;
let architecture = 0;
let coastline = 0;

let slogans = [];
// set event listeners 
climateSelect.addEventListener('change', () => {
    console.log('changing climate', climateSelect.value);
    climatePhoto.src = `./assets/${climateSelect.value}-climate.png`;
    climatePhoto.style.backgroundImage = `url('./assets/${climateSelect.value}-climate.png')`;
    climate++;
    displaystats();
});

architectureSelect.addEventListener('change', () => {
    console.log('changing architecture', architectureSelect.value);
    architecturePhoto.src = `./assets/${architectureSelect.value}-architecture.png`;
    architecturePhoto.style.backgroundImage = `url('./assets/${architectureSelect.value}-architecture.png')`;
    architecture++;
    displaystats();
});

coastlineSelect.addEventListener('change', () => {
    console.log('changing coastline', coastlineSelect.value);
    coastlinePhoto.src = `./assets/${coastlineSelect.value}-coastline.png`;
    coastlinePhoto.style.backgroundImage = `url('./assets/${coastlineSelect.value}-coastline.png')`;
    coastline++;
    displaystats();
});


sloganBtn.addEventListener('click', () => {
    const newSlogan = sloganInput.value;
    slogans.push(newSlogan);
    sloganInput.value = '';
    displaySlogans();
});

function displaySlogans() {
    list.textContent = '';
    for (let slogan of slogans) {
        const p = document.createElement ('p');
        p.textContent = slogan;
        list.append(p);
  // get user input
  // use user input to update state 
        function displaystats() {
            timesChanged.textContent = `You have changed the climate ${climate} times, the architecture ${architecture} times and the coastline ${coastline} times.`;
        }
  // update DOM to reflect the new state
    }
}
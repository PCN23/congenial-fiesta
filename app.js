// import functions and grab DOM elements
const climateSelect = document.getElementById('climate-select');
const climatePhoto = document.getElementById('newDay');

const architectureSelect = document.getElementById('architecture-select');
const architecturePhoto = document.getElementById('buildingArc');

const sloganInput = document.getElementById('slogan-input');

// let state
let climate = 0;
let architecture = 0;
let slogans = [];
// set event listeners 
climateSelect.addEventListener('change', () => {
  console.log('changing climate', climateSelect.value);
  climatePhoto.src = `..assets/${climateSelect.value}-climate.png`;
  climatePhoto.style.backgroundImage = `url('../assets/${climateSelect.value}-climate.png')`;
  climate++;
})

architectureSelect.addEventListener('change', () => {
  console.log('changing architecture', architectureSelect.value);
  architecturePhoto.src = `..assets/${climateSelect.value}-climate.png`;
  architecturePhoto.style.backgroundImage = `url('../assets/${architecturePhoto.value}-architecture.png')`;
  architecture++;
})

slogan.addEventListener('click', () => {
  slogan.push
})

  }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

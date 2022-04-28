// import functions and grab DOM elements
const climateSelect = document.getElementById('climate-select');
const climatePicture = document.getElementById('climate-pic');

const architectureSelect = document.getElementById('architecture-select');
const architecturePicture = document.getElementById('architecture-pic');
// let state
let climate = 0;
let architecture = 0;
let slogans = [];
// set event listeners 
climateSelect.addEventListener('change', () => {
  console.log('changing climate', climateSelect.value);

  climate++;
})

architectureSelect.addEventListener('change', () => {
  console.log('changing architecture', architectureSelect.value);
  
  architecture++;
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

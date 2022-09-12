import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'src/css/styles.css';
import SpaceAge from './spacecalculate';

function displayAges() {

};

function formSubmit(event){
  event.preventDefault();

  let age = document.getElementById("age").value;
  let planet = document.getElementById("planet-selector").value;
  let spaceAge;
  spaceAge = new SpaceAge(age, planet);
  spaceAge.age = spaceAge.getPlanetAge(); 
  spaceAge.getTimeDeath();
  displayAges();

}

window.addEventListener("load", function(){
  document.getElementById("user-input").addEventListener("submit", formSubmit);
});
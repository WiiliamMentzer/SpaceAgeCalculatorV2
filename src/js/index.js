import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceAge from './spacecalculate';

function displayAges(deathTracker, convertedAge, planet) {
  let timeToDeath = deathTracker;
  let planetAge = convertedAge;
  let planetChoice = planet;

  const ageDisplay = document.getElementById("age-display");
  const timeRemainder = document.getElementById("time-remainder");

  if (Math.sign(timeToDeath) === -1) {
    ageDisplay.innerHTML = "You are currently " + planetAge + " years old on the planet " + planetChoice + ".";
    timeRemainder.innerHTML = "You have died " + Math.abs(timeToDeath) + " years ago on the planet " + planetChoice + ".";
  } else {
    ageDisplay.innerHTML = "You are currently " + planetAge + " years old on the planet " + planetChoice;
    timeRemainder.innerHTML = "You have " + timeToDeath + " years left on the planet " + planetChoice + " until your inevitable DEATH.";
  }

  document.getElementById("display-box").removeAttribute("class");
}

function formSubmit(event){
  event.preventDefault();

  let age = document.getElementById("age").value;
  let planet = document.getElementById("planet-selector").value;
  let spaceAge;
  let deathTracker;

  spaceAge = new SpaceAge(age, planet);
  spaceAge.age = spaceAge.getPlanetAge(); 
  deathTracker = spaceAge.getTimeDeath();
  displayAges(deathTracker, spaceAge.age, spaceAge.planet);

}

window.addEventListener("load", function(){
  document.getElementById("user-input").addEventListener("submit", formSubmit);
});
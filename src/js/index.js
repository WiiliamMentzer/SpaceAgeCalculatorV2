import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceAge from './spacecalculate';

function displayAges(deathTracker, spaceAge, planet) {
  let timeToDeath = deathTracker;
  let planetAge = spaceAge;
  let planetChoice = planet;
  const ageResult = document.getElementById("age-result");
  const planetChosen1 = document.getElementById("planet-choice1");
  const planetChosen2 = document.getElementById("planet-choice2");
  const timeLeft = document.getElementById("time-left");

  ageResult.innerHTML = planetAge;
  planetChosen1.innerHTML = planetChoice;
  planetChosen2.innerHTML = planetChoice;
  timeLeft.innerHTML = timeToDeath;

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
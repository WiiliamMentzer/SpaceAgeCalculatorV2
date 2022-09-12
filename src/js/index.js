import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import SpaceAge from './spacecalculate';

function formSubmit(event){
	event.preventDefault();

  let age = document.getElementById("").value;
	let planet = document.getElementById("").value;
  let spaceAge;
  spaceAge = new SpaceAge(age, planet);
  spaceAge.getAge();
  spaceAge.getTimeDeath();

}

window.addEventListener("load", function(){
	document.getElementById("user-input").addEventListener("submit", formSubmit);
})
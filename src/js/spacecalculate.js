export default class SpaceAge {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  getPlanetAge() {
    let planetAge = null;
    if (this.planet === "Mercury") {
      planetAge = Math.round(this.age / 0.2408);
    } else if (this.planet === "Venus") {
      planetAge = Math.round(this.age / 0.61562);
    } else if (this.planet === "Mars") {
      planetAge = Math.round(this.age / 1.8809);
    } else if (this.planet === "Jupiter") {
      planetAge = Math.round(this.age / 11.862);
    }
    return planetAge;
  }

  getTimeDeath() {
    if (this.planet === "Mercury") {
      let timeLeft = 332 - this.age;
      return timeLeft;
    } else if (this.planet === "Venus") {
      let timeLeft = 130 - this.age;
      return timeLeft;
    } else if (this.planet === "Mars") {
      let timeLeft = 43 -this.age;
      return timeLeft;
    } else if (this.planet === "Jupiter") {
      let timeLeft = 7 - this.age;
      return timeLeft;
    }
  }
}
export default class SpaceAge {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet
  }

  getAge() {
    let ageConversion = this.age + " " + this.planet
    return ageConversion;
    // return this.age + this.planet;
  }
}
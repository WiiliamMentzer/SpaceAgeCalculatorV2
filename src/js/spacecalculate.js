export default class SpaceAge {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet
  }

  getAge() {
    let ageConversion = null;

    return this.age + this.planet;
  }
}
export default class SpaceAge {
  constructor(age, spaceAgePost) {
    this.age = age;
    this.spaceAgePost = spaceAgePost;
  }

  getAge() {
    return this.age * this.spaceAgePost;
  }
}
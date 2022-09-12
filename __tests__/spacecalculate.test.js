import SpaceAge from "../src/js/spacecalculate";

describe('SpaceAge', () => {
  let spaceAge;
  let planetAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Mercury");
  });

  test('should correctly create a SpaceAge object using the one age', () => {
    expect(spaceAge.age).toEqual(3);
  });

  test('should correctly get the information of a SpaceAge object', () => {
    expect(spaceAge.getAge()).toEqual(planetAge = 12);
  });

});

describe ('getTimeDeath', () => {
  let spaceAge;
  let timeLeft;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Mercury");
    spaceAge.getAge();
  });

  test('should get time left of your life on the selected planet', () => {
    expect(spaceAge.getTimeDeath()).toEqual(timeLeft = 329);
  });
});

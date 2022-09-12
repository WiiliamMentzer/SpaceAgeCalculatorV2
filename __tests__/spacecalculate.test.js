import SpaceAge from "../src/js/spacecalculate";

describe('SpaceAge', () => {
  let spaceAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Mercury");
  });

  test('should correctly create a SpaceAge object using two ages', () => {
    expect(spaceAge.age).toEqual(3);
  });

  test('should correctly get the information of a SpaceAge object', () => {
    expect(spaceAge.getAge()).toEqual("3 Mercury");
  });
});

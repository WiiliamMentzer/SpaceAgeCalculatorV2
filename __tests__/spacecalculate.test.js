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
    expect(spaceAge.getPlanetAge()).toEqual(planetAge = 12);
  });
});

describe('SpaceAge', () => {
  let spaceAge;
  let planetAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Venus");
  });

  test('should correctly create a SpaceAge object using the one age', () => {
    expect(spaceAge.age).toEqual(3);
  });

  test('should correctly get the information of a SpaceAge object', () => {
    expect(spaceAge.getPlanetAge()).toEqual(planetAge = 5);
  });
});

describe('SpaceAge', () => {
  let spaceAge;
  let planetAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Mars");
  });

  test('should correctly create a SpaceAge object using the one age', () => {
    expect(spaceAge.age).toEqual(3);
  });

  test('should correctly get the information of a SpaceAge object', () => {
    expect(spaceAge.getPlanetAge()).toEqual(planetAge = 2);
  });

});

describe('SpaceAge', () => {
  let spaceAge;
  let planetAge;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Jupiter");
  });

  test('should correctly create a SpaceAge object using the one age', () => {
    expect(spaceAge.age).toEqual(3);
  });

  test('should correctly get the information of a SpaceAge object', () => {
    expect(spaceAge.getPlanetAge()).toEqual(planetAge = 0);
  });

});

describe ('getTimeDeath', () => {
  let spaceAge;
  let timeLeft;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Mercury");
    spaceAge.age = spaceAge.getPlanetAge();
  });

  test('should get time left of your life on the selected planet', () => {
    expect(spaceAge.getTimeDeath()).toEqual(timeLeft = 320);
  });
});

describe ('getTimeDeath', () => {
  let spaceAge;
  let timeLeft;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Venus");
    spaceAge.age = spaceAge.getPlanetAge();
  });

  test('should get time left of your life on the selected planet', () => {
    expect(spaceAge.getTimeDeath()).toEqual(timeLeft = 125);
  });
});

describe ('getTimeDeath', () => {
  let spaceAge;
  let timeLeft;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Mars");
    spaceAge.age = spaceAge.getPlanetAge();
  });

  test('should get time left of your life on the selected planet', () => {
    expect(spaceAge.getTimeDeath()).toEqual(timeLeft = 41);
  });
});

describe ('getTimeDeath', () => {
  let spaceAge;
  let timeLeft;

  beforeEach(() => {
    spaceAge = new SpaceAge(3, "Jupiter");
    spaceAge.age = spaceAge.getPlanetAge();
  });

  test('should get time left of your life on the selected planet', () => {
    expect(spaceAge.getTimeDeath()).toEqual(timeLeft = 7);
  });
});

import AgeTraveller from '../src/js/ageChecker';

describe('AgeTraveller',() => {

  let testAge;

  beforeEach(() => {
    testAge = new AgeTraveller(50);
  });

  test('AgeTraveller should exist', () => {
    expect(testAge).toBeDefined();
  })
});
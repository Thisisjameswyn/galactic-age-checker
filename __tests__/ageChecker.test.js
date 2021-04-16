import AgeTraveller from '../src/js/ageChecker';

describe('AgeTraveller',() => {

  const testAge = 50;
  let ageTester;
  
  beforeEach(() => {
    ageTester = new AgeTraveller(testAge);
  });

  test('AgeTraveller should exist', () => {
    expect(ageTester).toBeDefined();
  })

  test('AgeTraveller should store an entered age value', () => {
    expect(ageTester.age).toEqual(testAge)
  })
});
import AgeTraveller from "../src/js/ageChecker";

describe("AgeTraveller",() => {

  const testAge = 50;
  let ageTester;
  
  beforeEach(() => {
    ageTester = new AgeTraveller(testAge);
  });

  test("AgeTraveller should exist", () => {
    expect(ageTester).toBeDefined();
  })

  test("AgeTraveller should store an entered age value", () => {
    expect(ageTester.age).toEqual(testAge);
  })

  test("AgeTraveller should store an average age value", () => {
    expect(ageTester.averageAge).toEqual(80);
  })

  test("AgeTraveller should store a return value for traveledAge", () => {
    expect(ageTester.traveledAge).toBeDefined();
  })
});

describe("AgeTraveller.returnAge", () => {
  const testAge = 50;
  const compAge = 26;
  const destinationArray = ["Mars", 1.88]
  let ageTester;
  
  beforeEach(() => {
    ageTester = new AgeTraveller(testAge);
  });

  test("returnAge should modify traveledAge based on destination values", () => {
    ageTester.returnAge(destinationArray)
    expect(ageTester.traveledAge).toEqual(compAge);
  })
})
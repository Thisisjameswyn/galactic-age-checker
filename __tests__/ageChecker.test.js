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

  test("AgeTraveller should store a value for timeleft", () => {
    expect(ageTester.timeLeft).toBeDefined();
  })

  test("AgeTraveller should store a value for years lived past the average age", () => {
    expect(ageTester.agePast).toBeDefined();
  })
});

describe("AgeTraveller.returnAge", () => {
  const testAge = 50;
  const compAge = 26;
  let ageTester;
  
  beforeEach(() => {
    ageTester = new AgeTraveller(testAge);
  });

  test("returnAge should modify traveledAge based on destination values", () => {
    const destinationArray = ["Mars", 1.88]
    ageTester.returnAge(destinationArray)
    expect(ageTester.traveledAge).toEqual(compAge);
  })

  test("returnAge should remain unmodified if Sun is selected", () => {
    const destinationArray = ["Sun", 0.0]
    ageTester.returnAge(destinationArray)
    expect(ageTester.traveledAge).toEqual(testAge);
  })

  test("returnAge should modify timeLeft to reflect acurate time remaining", () => {
    const destinationArray = ["Mars", 1.88]
    let compTimeLeft = 54;
    ageTester.returnAge(destinationArray)
    expect(ageTester.timeLeft).toEqual(compTimeLeft);
  })

  test("returnAge should modify agePast to reflect acurate years lived past the average age", () => {
    const destinationArray = ["Mercury", 0.24]
    let compAgePast = 128;
    ageTester.returnAge(destinationArray)
    expect(ageTester.agePast).toEqual(compAgePast);
  })
})
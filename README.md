## James Wyn

# Galactic Age Checker


### Description
This is my fifth week project for Epicodus.  The objective is to take a given age and return the comparrison age for Mercury, Venus, Mars and Jupiter. This also returns the years the user would have left to live based on average life expectancy.

### Technologies Used
* Bootstrap
* JavaScript
* jQuery
* JSON
* HTML
* CSS
* MD
* Webpack
* Jest

### Installation Instructions
1. Clone this repo: `git clone https://github.com/Thisisjameswyn/REPO URL`
2. Enter new directory `cd REPO DIR`
3. Install dependencies with `npm install`
4. Verify the program works by running `npm run test`
5. To run it locally, use the npm dev command `npm run start:dev`
6. Open your web browser and navigate to http://localhost:9001
7. For a production build, use `npm run build`

* * *

## Link where to find my GitHub link

*https://github.com/Thisisjameswyn/galactic-age-checker


### Specs

  describe("AgeTraveller")

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


  describe("AgeTraveller.returnAge")

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


## License
[MIT License](https://opensource.org/licenses/MIT)
&copy; James Wyn 2021

<br />

> You can't steal what is freely given. Enjoy!

<br />
<br />
<br />
<br />
<p align="center">
  <small>Made with ❤️ in Portland, Oregon. </small>
</p>
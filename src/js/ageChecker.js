export default class AgeTraveller {
  constructor(age) {
    this.age = age;
    this.averageAge = 80;
    this.traveledAge = age;
  }
  returnAge(destination) {
    this.traveledAge = this.age;
    if(destination === "Mars") {
      this.traveledAge = Math.trunc(this.traveledAge/1.88);
    } else if (destination === "Mercury") {
      this.traveledAge = Math.trunc(this.traveledAge/0.24);
    } else if (destination === "Venus") {
      this.traveledAge = Math.trunc(this.traveledAge/0.62);
    }
  }
}


//take in user input for age and pass to object constructor
//build object using passed in age and store average age plus a yet to be reassigned var for modifiedAge
//user will click on a planet to travel to
//onclick AgeTraveller will call returnAge passing in what planet was clicked
//returnAge will modify travelAge based on enterd
//
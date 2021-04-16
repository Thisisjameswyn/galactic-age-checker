export default class AgeTraveller {
  constructor(age) {
    this.age = age;
    this.averageAge = 80;
    this.traveledAge = age;
  }
  returnAge(destination) {
    this.traveledAge = this.age;
    this.traveledAge = Math.trunc(this.traveledAge/destination[1]);
    
  }
}
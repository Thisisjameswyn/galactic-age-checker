export default class AgeTraveller {
  constructor(age) {
    this.age = age;
    this.averageAge = 80;
    this.traveledAge = age;
  }
  returnAge(destination) {
    this.traveledAge = this.age;

    if(destination[1] === 0) {
      return
    } else {
      this.traveledAge = Math.trunc(this.traveledAge/destination[1]);
    }
  }
}
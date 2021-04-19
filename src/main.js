import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import AgeTraveller from '../src/js/ageChecker'

function returnRandom(array) {
  return Math.floor(Math.random() * array.length);
}

$(document).ready(function () {
  $(".planetHolder").click(function(event) {
    const enteredAge = parseInt($("#userAge").val());
    let _destination = [$(event.target).data().text, $(event.target).data().year];
    let myTravel = new AgeTraveller(enteredAge);
    myTravel.returnAge(_destination)

    let timeLeft = myTravel.averageAge - myTravel.traveledAge;
    let timeLeftText = ""
    if(timeLeft <= 0) {
      timeLeft = 0;
      timeLeftText = "no time to explore, better hurry back!"
    } else {
      timeLeftText = `about ${timeLeft} years to explore, have fun!`
    }

    const byeBye = ["Godspeed","Bye-bye","Tsetchem leshalom","Adieu","Adios","Farewell","Gluckliche Reise","Auf Wiedersehen","Happy landing","Pleasant journey","Cheerio"]

    $("#printout").text(`${byeBye[returnRandom(byeBye)]}!  Looks like you're headed to ${_destination[0]}
    and you'll be a local age of ${myTravel.traveledAge}.  That gives you ${timeLeftText}`)
    $("#printout").toggle();
    event.preventDefault()
  });
});
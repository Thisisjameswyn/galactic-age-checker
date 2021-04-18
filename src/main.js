import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import AgeTraveller from '../src/js/ageChecker'

function returnRandom(array) {
  return Math.floor(Math.random() * array.length);
}

$(document).ready(function () {
  let _destination = []
  let myTravel;
  $("#travelLog").submit(function (event) {
    const enteredAge = parseInt($("#userAge").val());
    myTravel = new AgeTraveller(enteredAge);
    myTravel.returnAge(_destination)

    const byeBye = ["Godspeed","Bye-bye","Tsetchem leshalom","Adieu","Adios","Farewell","Gluckliche Reise","Auf Wiedersehen","Happy landing","Pleasant journey","Cheerio"]

    $("#printout").text(`${byeBye[returnRandom(byeBye)]}!  Looks like you're headed to ${_destination[0]}
    and you'll be a local age of ${myTravel.traveledAge}.  That gives you about ${myTravel.averageAge - myTravel.traveledAge} years to explore`)

    event.preventDefault();
  });

  $("#destinations").click(function(event) {
    _destination = [$(event.target).text(), $(event.target).data().year];
    event.preventDefault()
  });
});
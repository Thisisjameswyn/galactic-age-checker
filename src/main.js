import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import AgeTraveller from '../src/js/ageChecker'

$(document).ready(function () {
  let _destination = []
  let myTravel;
  $("#travelLog").submit(function (event) {
    const enteredAge = parseInt($("#userAge").val());
    myTravel = new AgeTraveller(enteredAge);
    myTravel.returnAge(_destination)
    $("#printout").text(`Bon voyage!  Looks like you're headed to ${_destination[0]}
    and you'll be a local age of ${myTravel.traveledAge}.  That gives you about ${myTravel.averageAge - myTravel.traveledAge} years to explore`)
    event.preventDefault();
  });
  $("#destinations").click(function(event) {
    _destination = [$(event.target).text(), $(event.target).data().year];
    event.preventDefault()
  });
});
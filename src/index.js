import $ from 'jquery';
import './css/styles.css';
import Rates from'./rates.js'

$(document).ready(function() {
  $("#exchange").submit(function(event) {
    let promise = Rates.getRates();
    promise.then(function (response) {
      let body = JSON.parse(response);
      const usdAmount = parseInt($("#usd").val());
      const userCurrency = $("#conversion-options").val();
      console.log(body);
      console.log(usdAmount);
      console.log(userCurrency);
    }, function(error) {
      $('#error').text(`There was an error processing your request: ${error}`)
    });
    event.preventDefault();
  });
});
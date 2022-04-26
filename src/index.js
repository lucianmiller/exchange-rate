import $ from 'jquery';
import './css/styles.css';
import Rates from'./rates.js';

function usdConversion(usd, currencyRate) {
  let convertedPrice = usd * currencyRate;
  return convertedPrice.toFixed(2);
}

$(document).ready(function() {
  $("#exchange").submit(function(event) {
    let promise = Rates.getRates();
    promise.then(function (response) {
      let body = JSON.parse(response);
      const usdAmount = parseInt($("#usd").val());
      const userCurrency = $("#conversion-options").val();
      const conversionRate = body["conversion_rates"][userCurrency];
      const finalAmount = usdConversion(usdAmount, conversionRate);
      $('#final-conversion').text(`The amount is $${finalAmount}.`);
    }, function(error) {
      let errorObj = JSON.parse(error);
      $('#error').text(`There was an error processing your request: ${errorObj["error-type"]}`);
    });
    event.preventDefault();
  });
});
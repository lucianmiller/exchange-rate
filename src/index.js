import $ from 'jquery';
import './css/styles.css';

$(document).ready(function() {
  $("#exchange").submit(function(event) {
    const usdAmount = parseInt($("#usd").val());
    const userCurrency = $("#conversion-options").val();
    console.log(usdAmount);
    console.log(userCurrency);
    event.preventDefault();
  });
});
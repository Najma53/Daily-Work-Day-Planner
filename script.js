//display the current date on the page -from moment.js
//dddd-displays day of week
//MMMM-displays month
//do displays date
//YYYY displays year
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
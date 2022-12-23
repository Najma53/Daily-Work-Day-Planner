//display the current date on the page -from moment.js
//dddd-displays day of week
//MMMM-displays month
//do displays date
//YYYY displays year
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

//variables in global scope

var saveBtn = document.querySelector(".saveBtn");

var currentHour = moment().hour();

// initial function to load up correctly the colorscheme to the planner
function init() {
    $('.time-block').each(function () {
        var dailyAppointmenthHour = $(this).attr("id").split("t")[1];
        //console.log("currentHour " + currentHour)
        //console.log("dailyAppointmenthHour " + dailyAppointmentHour)

//this will add different colors to the time block using CSS
        //without this the textarea is just empty white space and so is the time block
        if (dailyAppointmenthHour < currentHour) {
            $(this).addClass("past");
        }
        else if (dailyAppointmenthHour == currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

//Event Listener- saves data in local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    //Gets the value of user's input
    var value = $(this).siblings(".description").val();
    //Grab user's id in order to store it 
    var time = $(this).parent().attr("id"); 

    //Every time user writing something, the localStorage's value will override . 
    localStorage.setItem(time, value);

    console.log(time);
    console.log (value);
})


// / Render localstorage values
$("#t9 .description").val(localStorage.getItem("t9"));
$("#t10 .description").val(localStorage.getItem("t10"));
$("#t11 .description").val(localStorage.getItem("t11"));
$("#t12 .description").val(localStorage.getItem("t12"));
$("#t13 .description").val(localStorage.getItem("t13"));
$("#t14 .description").val(localStorage.getItem("t14"));
$("#t15 .description").val(localStorage.getItem("t15"));
$("#t16 .description").val(localStorage.getItem("t16"));
$("#t17 .description").val(localStorage.getItem("t17"));

init();
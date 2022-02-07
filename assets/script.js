var hour = moment().format('H');

var hourNum = parseInt(hour);
console.log(hourNum);

if (hourNum === 22) {
$("#hour-9").removeClass("future");
$("#hour-9").addClass("past")
};
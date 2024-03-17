

// select the value

var hour = document.getElementById("hr")
var mins = document.getElementById("min")
var sec = document.getElementById("sec")

//define the date functions

setInterval(() => {

    var datevalue = new Date()
    hour.innerHTML = datevalue.getHours()
    mins.innerHTML = (datevalue.getMinutes() < 10 ? "0" : true) + datevalue.getMinutes()
    sec.innerHTML = (datevalue.getSeconds() < 10 ? "0" : true) + datevalue.getSeconds()



}, 1000)





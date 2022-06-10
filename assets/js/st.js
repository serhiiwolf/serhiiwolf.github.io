/*school time js*/

var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var wd = weekday[d.getDay()]
document.getElementById('std').innerHTML = wd;
document.getElementById('sth').innerHTML = h;
document.getElementById('stm').innerHTML = m;

/* school */

if (wd != "Sunday" && wd != "Saturday" ) {
     if (h >= 9 && h <= 16 ) {
       document.getElementById('wt').innerHTML = "Study";
     }
    
}
if (wd == "Sunday" || wd == "Saturday" ){
    if (h <= 9 && h >= 16 ) {
    document.getElementById('wt').innerHTML = "Freetime";
    }
}
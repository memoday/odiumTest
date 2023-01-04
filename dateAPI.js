let response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul');
let result = await response.json();
let rawdate = result.datetime;
var today = rawdate.substring(0,10);

today = new Date(today)

var mm = today.getMonth()+1;
var dd = today.getDate();
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
console.log(yyyy+'년 '+mm+'월 '+dd+'일');

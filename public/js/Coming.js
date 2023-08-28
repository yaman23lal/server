const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number")

  const form =document.querySelector("#goForm")
  // days = document.querySelector(".days .number");

  let day = new Date().getDate();
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  
  let today = `${year}-${month+1}-${day}`

  let date1 = new Date(today)

  let date2= new Date(date1.getTime()-5.5*60*60*1000+19*60*60*1000)

// let Now =new Date(new Date().getTime()+5.5*60*60*1000)
    
// console.log(Now); 


let s= date2.getTime()-new Date().getTime();

console.log(new Date(date2.getTime()));
// console.log(diff);
var Ch,Cm,Cs;


    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
  
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
  
  Ch= pad(hrs) ;
  Cm=  pad(mins);
  Cs= pad(secs);
  
let secValue = Cs,
  minValue = Cm,
  hourValue = Ch
  // dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0 && minValue === 0 && secValue === 0) {
     form.click();
  }

  seconds.textContent =  secValue;
  minutes.textContent =  minValue;
  hours.textContent =  hourValue;
}, 1000); //1000ms = 1s

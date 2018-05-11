

(function () { 
  
  var launchDate = new Date('2018-09-01T00:00:00').getTime();
  function Timer() {
    addZero = function (num) {
      return (num < 10) ? "0"+num : num
    }

    var timeToGo = launchDate - Date.now();
 
    document.getElementById("seconds").innerHTML = addZero(Math.floor((timeToGo % (1000 * 60)) / 1000));
    document.getElementById("minutes").innerHTML = addZero(Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60)));
    document.getElementById("hours").innerHTML = addZero(Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    document.getElementById("days").innerHTML = Math.floor(timeToGo / (1000 * 60 * 60 * 24));

  }

  Timer(); // call first time to itit values
  setInterval(Timer, 1000);
  document.getElementById("countdown").style.visibility = 'visible';

})();



(function () { 
  var launchDate = new Date('2018-09-01T00:00:00').getTime();
  function Timer() {

    var timeToGo = launchDate - Date.now();
 
    document.getElementById("seconds").innerHTML = Math.floor((timeToGo % (1000 * 60)) / 1000);
    document.getElementById("minutes").innerHTML = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("hours").innerHTML = Math.floor((timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("days").innerHTML = Math.floor(timeToGo / (1000 * 60 * 60 * 24));

  }

  setInterval(Timer, 1000);

})();

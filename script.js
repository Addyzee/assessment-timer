let url = "https://form.typeform.com/to/jlfqWUl4"; // NOTE: Replace with your typeform URL
let time_in_min = 140;
let count;

var startTimer = function (duration, display) {
  //add form
  window.tf.createWidget("jlfqWUl4", {
    container: document.querySelector("#form"),
    width: 600,
    height: 600,
    hidden: { utm_source: "glitch-tf-embed-timer" },
  });

  document.getElementById("btn_start_timer").disabled = true;

  var timer = duration,
    minutes,
    seconds;
  count = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      let el = document.createTextNode("Time is over. Please submit your responses within two minutes to ensure your submissions are considered for review");
      document.querySelector("#form").appendChild(el);
      clearInterval(count);
      document.getElementById("btn_start_timer").disabled = false;
    }
  }, 1000); //every second
};

var stopTimer = function () {
  document.getElementById("btn_start_timer").disabled = false;
  document.getElementById("btn_stop_timer").disabled = true;
  clearInterval(count);
};

document.getElementById("btn_start_timer").addEventListener(
  "click",
  () => {
    startTimer(time_in_min * 60, document.querySelector("#time_left"));
  },
  false
);
document
  .getElementById("btn_stop_timer")
  .addEventListener("click", stopTimer, false);

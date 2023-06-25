const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //1초 기다리지 않고 바로 실행
setInterval(getClock, 1000); //1초마다 갱신

//html
/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Momentum App</title>
  </head>
  <body>
    <form class="hidden" id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="What is your name?"
      />
      <button>Log In</button>
    </form>
    <h1 id="greeting" class="hidden"></h1>
    <h2 id="clock"></h2>
    <script src="js/clock_6_21.js"></script>
    <script src="js/greetings_6_21.js"></script>
  </body>
</html>*/

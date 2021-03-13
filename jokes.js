setTimeout(() => {
  //* https://icanhazdadjoke.com

  const jokes = document.querySelector("#joke");

  const jokeBtn = document.querySelector("#jokeBtn");

  const autoJokes = document.querySelector(".auto");
  
  const speed = document.querySelector(".speed");

  // * done by async await

  const getJokes = async () => {
    try {
      const setHeader = {
        headers: {
          Accept: "application/json",
        },
      };
      const res = await fetch("https://icanhazdadjoke.com", setHeader);
      const data = await res.json();
      jokes.innerHTML = data.joke;
    } catch (error) {
      console.log("The error is " + error);
    }
  };

  jokeBtn.addEventListener("click", getJokes);

  getJokes();

  let getAuotFun = false;

  let speed = 1000;

  const setAuto = () => {
    getAuotFun = true;

    setAutoInt = setInterval(() => {
      getJokes();
      autoJokes.innerHTML =
        "stop" + '<i class="tiny material-icons">autorenew</i>';
      autoJokes.classList.add("rotate");

      jokeBtn.style.display = "none";
      // speed.style.display = "block";
    }, speed);
  };

  const clearAuto = () => {
    getAuotFun = false;

    clearInterval(setAutoInt);
    autoJokes.innerHTML =
      "auto" + '<i class="tiny material-icons">autorenew</i>';
    autoJokes.classList.remove("rotate");
  };

  autoJokes.addEventListener("click", () => {
    getAuotFun ? clearAuto() : setAuto();
  });

  // end settimeout
}, 100);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  var options = document.querySelectorAll(".dropdown-content");
  M.Dropdown.init(elems, options);
});

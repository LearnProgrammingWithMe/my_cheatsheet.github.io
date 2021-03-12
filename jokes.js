//* https://icanhazdadjoke.com

const jokes = document.querySelector("#joke");

const jokeBtn = document.querySelector("#jokeBtn");

// * done by PROMISE
// const getJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com' , setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) =>{
//         console.log(error);
//     })
// }

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

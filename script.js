const jokeCont = document.getElementById("jokeContainer");

function randomJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => response.json())
    .then((jsonResponse) => {
      renderJoke(jsonResponse);
      console.log(jsonResponse);
    });
}

function renderJoke(joke) {
  console.log(joke.joke);
  let jokeString = `<p>${joke.joke}</p>`;
  jokeCont.innerHTML = jokeString;
}

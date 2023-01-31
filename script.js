const jokeCont = document.getElementById("jokeContainer");

function randomJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => response.json())
    .then((jsonResponse) => {
      renderJoke(jsonResponse);
      console.log(jsonResponse);
    });
}

function twoPartJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
    .then((response) => response.json())
    .then((jsonResponse) => {
      renderJoke(jsonResponse);
    });
}

function renderJoke(joke) {
  if (joke.type === "single") {
    let jokeString = `<p>${joke.joke}</p>`;
    jokeCont.innerHTML = jokeString;
  } else {
    jokeString = `<p>${joke.setup}</p>`;
    jokeString += `<p>...</p>`;
    jokeString += `<p>${joke.delivery}</p>`;
    jokeCont.innerHTML = jokeString;
  }
}

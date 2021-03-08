/** Fetches the current date from the server and adds it to the page. */
async function showRandomLyrics() {
  const responseFromServer = await fetch('/randomLyrics');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('lyrics-container');
  dateContainer.innerText = textFromResponse;
}

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.querySelector(".btn-new");
const tweetBtn = document.getElementById("btn-tweet");

const api_url = "https://dummyjson.com/quotes/random";
async function getquote(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // checking the server response
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    var data = await response.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  } catch (error) {
    console.error("Faild to fetch quote:", error);
    quote.innerHTML =
      "Failed to load quote. Please check your internet connection.";
    author.innerHTML = "Error";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getquote(api_url);
});

newQuoteBtn.addEventListener("click", () => {
  getquote(api_url);
});



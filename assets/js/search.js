let inputText = document.getElementById('input')

inputText.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});

function search() {
  let input = document.getElementById('input');

  window.location.replace('https://www.google.com/search?q=' + input.value);
}

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);
  if (selectedText.length > 0) {
    let message = {
      text: selectedText
    };

    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "localhost:8000/myapp1", true);
  xhttp.send(message);

   chrome.runtime.sendMessage(message);
  }
}

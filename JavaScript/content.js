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
  xhttp.responseType = 'json';
  var payload = new FormData();
  payload.append('text',selectedText);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.response);
     chrome.runtime.sendMessage(this.response.subjective);
    }
  };

  xhttp.open("POST", "http://localhost:8000/myapp1/", true);
  xhttp.send(payload);

  //  chrome.runtime.sendMessage(message);
  }
}

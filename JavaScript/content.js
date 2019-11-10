// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
  var hackutd_nlp_host = "https://hackutd-cognizant-nlp.herokuapp.com/myapp1/";
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

  xhttp.open("POST", hackutd_nlp_host, true);
  xhttp.send(payload);

  //  chrome.runtime.sendMessage(message);
  }
}

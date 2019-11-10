// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.word = [];
window.targetElement = Object();
function receiver(request, sender, sendResponse) {
  console.log(request);
  window.word = request;
}

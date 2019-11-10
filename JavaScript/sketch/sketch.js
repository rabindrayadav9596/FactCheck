// Wordnik API key:
// let api_key = '/?api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'

function setup() {
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word;

  
  if (word.length > 0){
    var h1 = document.createElement("h1");
    h1.innerHTML = "Subjective Sentences";
    var list = document.createElement("ol");
    word.forEach(word =>{
      var li = document.createElement("li");
      var span = document.createElement("span")
      li.innerHTML = word;
      span.appendChild(li)
      list.appendChild(span);
    });
    document.getElementById("response").appendChild(h1);
    document.getElementById("response").appendChild(list);
  }else{
    var h1 = document.createElement("h1");
    h1.innerHTML = "No subjective sentences identified in the highlighted text.";
    document.getElementById("response").appendChild(h1);
  }
  

  
  
  // document.getElementById("response").innerHTML = word;
  // let url = `http://api.wordnik.com:80/v4/word.json/
  // ${word}
  // /definitions?limit=1
  // &includeRelated=false
  // &sourceDictionaries=all
  // &useCanonical=false
  // &includeTags=false
  // &api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
  // `
  // url = url.replace(/\s+/g, '');


  //loadJSON(url, gotData);
//data is the json object 
  // function gotData(data) {
  //   createP(data[0].text).style('font-size', '48pt');
  // }
  //createP(word);
}

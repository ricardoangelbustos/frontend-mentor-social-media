function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  var element2 = document.getElementById("container")
  element2.classList.toggle("dark-mode");
  
  var element3 = document.getElementById("facebook")
  element3.classList.toggle("boxes-dark");
  
  var element4 = document.getElementById("twitter")
  element4.classList.toggle("boxes-dark");
  
  var element5 = document.getElementById("instagram")
  element5.classList.toggle("boxes-dark");
  
  var element6 = document.getElementById("youtube")
  element6.classList.toggle("boxes-dark");
  
  var element7 = document.getElementById("row-box")
  element7.classList.toggle("boxes-dark");
  
  var element8 = document.getElementById("row-box2")
  element8.classList.toggle("boxes-dark");
  
  var element9 = document.getElementById("row-box3")
  element9.classList.toggle("boxes-dark");
  
  var element10 = document.getElementById("row-box4")
  element10.classList.toggle("boxes-dark");
  
  var element11 = document.getElementById("row-box5")
  element11.classList.toggle("boxes-dark");
  
  var element12 = document.getElementById("row-box6")
  element12.classList.toggle("boxes-dark");
  
  var element13 = document.getElementById("row-box7")
  element13.classList.toggle("boxes-dark");
  
  var element14 = document.getElementById("row-box8")
  element14.classList.toggle("boxes-dark");
  
  var text = document.getElementById("text");
  if (text.innerHTML.match("Dark Mode")) {
    text.innerHTML = "Light Mode";
  } else {
    text.innerHTML = "Dark Mode";
  }
}
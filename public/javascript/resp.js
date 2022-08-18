var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});
mybutton = document.getElementById("mybtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function myFunction() {
var x = document.getElementById("myDIV");

if (x.style.display === "none") {
  x.style.display = "block";
} 
else {
  x.style.display = "none";
}
}

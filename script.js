function navigation() {
 var y = document.getElementsByClassName("toggle_icon");
  var x = document.getElementById("mhpLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    // y.
  } else {
    x.style.display = "block";
  }
}

// script to initiate slides on small screen
let slideIndex = 0;
showSlides();

function showSlides() {
 if (screen.width <= 680)
 {
   let i;
  let slides = document.getElementsByClassName("recent_project_item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds

 }
 
}
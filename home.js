

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds

}

function first(){

  document.getElementById("pop").src="./icons/bannerpics/cp11.jpg";
}
function second(){

  document.getElementById("pop").src="./icons/bannerpics/cp22.jpg";
}
function third(){

  document.getElementById("pop").src="./icons/bannerpics/cp33.jpg";
}
setInterval(first,5000);
setInterval(second,10000);
setInterval(third,15000);


function one(){

  document.getElementById("sliderimages").src="./icons/slideimages/pic1.jpg";
}

function two(){

  document.getElementById("sliderimages").src="./icons/slideimages/pic2.jpg";
}
function three(){

  document.getElementById("sliderimages").src="./icons/slideimages/pic3.jpg";
}
function four(){

  document.getElementById("sliderimages").src="./icons/slideimages/pic4.jpg";
}
function five(){

  document.getElementById("sliderimages").src="./icons/slideimages/pic5.jpg";
}
setInterval(one,3000);
setInterval(two,6000);
setInterval(three,9000);
setInterval(four,12000);
setInterval(five,15000);

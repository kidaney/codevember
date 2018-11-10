let images = [
    "images\\20160907_183325.jpg", 
    "images\\blue tiki.jpg", 
    "images\\christmas phil.jpg", 
    "images\\Pic-01022016-001.jpg",
    "images\\Pic-01192016-009.jpg"
];

const image = document.getElementById("image");
let index = 0;
image.src = images[0];

function showImage(direction){
  if (direction == "left"){
    index--;
  } else {
    index++;
    index %= images.length;
  }
  
  if (index < 0){
    index = images.length - 1;
  }
  
  image.src = images[index];
}
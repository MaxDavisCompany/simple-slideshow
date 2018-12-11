var i = 0; // Start point
var images = [];
var time = 3000;

// Image List
images[0] = 'http://source.unsplash.com/random/1200x600';
images[1] = 'http://source.unsplash.com/random/1200x601';
images[2] = 'http://source.unsplash.com/random/1200x602';
images[3] = 'http://source.unsplash.com/random/1200x603';

// Change Image
function changeImg() {
  document.slide.src = images[i];

  if(i < images.length -1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

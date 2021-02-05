const slider = document.querySelector('.slider-container'),
// this will make a similar to array out of all the class "slides"
slides = Array.from(document.querySelectorAll('.slide'))

// setting global variables. 

let isDragging = false; // this is a boolean when if the finger or mouse is on the photo in the slider.
startPos = 0,   // this is where we start on the device or our finger on the photos
currentTranslate = 0, // value of the translateX css tag
previousTranslate = 0, 
animationID = 0, 
currentIndex = 0, // the position of where you are in the slides. 

// below creating a for each loop that takes in the slide and the index that it is associated with.
// because above slides is returning an array from the querySelector. 
slides.forEach((slide,index) =>{
 const slideImage = slide.querySelector('img')
 //this below will take the event of starting the drag but will return prevent default
 // the default is being able to drag the photo on the page. using this 
 // makes the user not able to do so. 
 slideImage.addEventListener('dragstart',(e) => e.preventDefault())


 // Touch events 
 slide.addEventListener('mousedown',touchStart(index))


 //Mouse Events
})

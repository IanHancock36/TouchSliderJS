const slider = document.querySelector(".slider-container"),
  // this will make a similar to array out of all the class "slides"
  slides = Array.from(document.querySelectorAll(".slide"));

// setting global variables.

let isDragging = false; // this is a boolean when if the finger or mouse is on the photo in the slider.
(startPos = 0), // this is where we start on the device or our finger on the photos
  (currentTranslate = 0), // value of the translateX css tag
  (previousTranslate = 0),
  (animationID = 0),
  (currentIndex = 0), // the position of where you are in the slides.
  // below creating a for each loop that takes in the slide and the index that it is associated with.
  // because above slides is returning an array from the querySelector.
  slides.forEach((slide, index) => {
    const slideImage = slide.querySelector("img");
    //this below will take the event of starting the drag but will return prevent default
    // the default is being able to drag the photo on the page. using this
    // makes the user not able to do so.
    slideImage.addEventListener("dragstart", (e) => e.preventDefault());

    // Touch events
    slide.addEventListener("touchstart", touchStart(index));
    slide.addEventListener("touchend", touchEnd);
    slide.addEventListener("touchmove", touchMove);

    //Mouse Events
    slide.addEventListener("mousedown", touchStart(index));
    slide.addEventListener("mouseup", touchEnd);
    slide.addEventListener("mouseleave", touchEnd);
    slide.addEventListener("mousemove", touchMove);
  });
//Disable
// this below prevents context menus from opening in the window. The context menu typically appears upon a right click.
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPostionX(event);
    isDragging = true;

    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing')
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID)

  const movedBy=  currentTranslate - previousTranslate
  
  if(movedBy <-100 && currentIndex < slides.length -1)
  currentIndex += 1 

  if(movedBy > 100 && currentIndex >0)
  currentIndex -=1 
// this above stops moving to the right + is to the right on the x-axis
  
  // -100 means moving to the left
  // 

 setPostitionbyIndex()

  slider.classList.remove('grabbing')
}

function touchMove() {
  if (isDragging) {
    const currentPosition = getPostionX(event)
    currentTranslate = previousTranslate + currentPosition - startPos
  }
}
function getPostionX(event) {
  return event.type.includes("mouse") ? event.page.pageX : event.touches[0].clientX;
}

function animation() {
 setSliderPostition() 
  if (isDragging = true) requestAnimationFrame(animation);
}

function setSliderPostition(){
    slider.style.transform = `translateX(${currentTranslate}px)`
}

// this allows the to shift the slides 
function setPostitionbyIndex(){
  currentTranslate = currentIndex * -window.innerWidth
  previousTranslate = currentTranslate
  setSliderPostition()

}
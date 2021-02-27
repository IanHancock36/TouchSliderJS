// Bringing  in slider 
const slider = document.querySelector(".slider-container")
// Getting all the slides need query selector all .slide or using "." is the class name selector
slides = Array.from(document.querySelectorAll('.slide'))
// using Array from gets a copy of all the slides in an array format it doesn't change original variable 
// you can store it in a new variable and make changes but does not change original array or data set. 
// it makes a "shallow copy of an array " if there are primitives only makes changes to the copy 
// if the array contains primitives and objects. It will make a copy but it will change the original as well

// setting global values/state 

let isDragging = false, 
startPos = 0, 
currentTranslate = 0, // value for translate x 
previosTranslate = 0, 
animationID = 0

// loop through slides using a function you want the slide and the index of the particular slide passed in as a parameter. 
//create variable called slide image and grab the image for whatever slide we are in and use an 
// event listener and add dragstart looking for the drag then when the event is done it will run prevent default do it does not 
// get dragged off the screen it stays in the same place 
// inside this same function you want your "touch events " and your "mouse events as well "

slides.forEach((slide, index)=> {
 const slideImage = slide.querySelector('img')
 slideImage.addEventListener('dragstart',(e) => e.preventDefault())
// Touch Events // this takes individual slides when you put your finger on a device
slide.addEventListener('touchstart')

// Mouse Events 



}) 



























// //get our elements
// const slider = document.querySelector('.slider-container'),
//   slides = Array.from(document.querySelectorAll('.slide'))

// // set up our state
// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID,
//   currentIndex = 0

// // add our event listeners
// slides.forEach((slide, index) => {
//   const slideImage = slide.querySelector('img')
//   // disable default image drag
//   slideImage.addEventListener('dragstart', (e) => e.preventDefault())
//   // touch events
//   slide.addEventListener('touchstart', touchStart(index))
//   slide.addEventListener('touchend', touchEnd)
//   slide.addEventListener('touchmove', touchMove)
//   // mouse events
//   slide.addEventListener('mousedown', touchStart(index))
//   slide.addEventListener('mouseup', touchEnd)
//   slide.addEventListener('mousemove', touchMove)
//   slide.addEventListener('mouseleave', touchEnd)
// })

// // make responsive to viewport changes
// window.addEventListener('resize', setPositionByIndex)

// // prevent menu popup on long press
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }

// // use a HOF so we have index in a closure
// function touchStart(index) {
//   return function (event) {
//     currentIndex = index
//     startPos = getPositionX(event)
//     isDragging = true
//     animationID = requestAnimationFrame(animation)
//     slider.classList.add('grabbing')
//   }
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos
//   }
// }

// function touchEnd() {
//   cancelAnimationFrame(animationID)
//   isDragging = false
//   const movedBy = currentTranslate - prevTranslate

//   // if moved enough negative then snap to next slide if there is one
//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

//   // if moved enough positive then snap to previous slide if there is one
//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

//   setPositionByIndex()

//   slider.classList.remove('grabbing')
// }

// function animation() {
//   setSliderPosition()
//   if (isDragging) requestAnimationFrame(animation)
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth
//   prevTranslate = currentTranslate
//   setSliderPosition()
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`
// }


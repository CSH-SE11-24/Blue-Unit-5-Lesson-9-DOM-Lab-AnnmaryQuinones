console.log("Script running...")
// Task 1: Intro section
// Select the location button
let button = document.querySelector("#location")

// Select the empty p tag under the button
let p = document.querySelector("#locationText")


// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
button.addEventListener('click', function(event){
  p.textContent += ("1300 Boynton Ave (moving soon!)")
})


// Task 2: Our Values section
// Select the h3 with S under "Our Values"
let values = document.querySelector("#score1")

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
values.addEventListener('click', function(event){
  values.textContent = ("Self-Awareness")
  
})

values.addEventListener('mouseover',function(event){
  values.style.color = 'green';
})

values.addEventListener('mouseout', function(event){
  values.style.color = 'black';
})

// Select the h3 with C under "Our Values"
// Make sure to add an id/class as needed in the HTML to do this
let value = document.querySelector("#score2")

// Add an event listener on the h3 such that when it is clicked, the text changes to "Consistency"
value.addEventListener('click', function(event){
  value.textContent = ('Consistency')
})

value.addEventListener('mouseover',function(event){
  value.style.color = 'green';
})

value.addEventListener('mouseout', function(event){
  value.style.color = 'black';
})



// Task 3: Uniform section
// Select the joggers image
let joggers = document.querySelector("#joggers")

// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp
joggers.addEventListener('mouseover', function(event){
  joggers.src = ('joggers-back.webp')
})


// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp
joggers.addEventListener('mouseout', function(event){
  joggers.src = ('joggers-front.webp')
})


// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (ownership, resilience, excellent)
let o = document.querySelector("#score3")
let r = document.querySelector("#score4")
let e = document.querySelector("#score5")

o.addEventListener('click', function(event){
  o.textContent = ('Ownership')
})

o.addEventListener('mouseover',function(event){
  o.style.color = 'green';
})

o.addEventListener('mouseout', function(event){
  o.style.color = 'black';
})

r.addEventListener('click', function(event){
  r.textContent = ('Resilience')
})

r.addEventListener('mouseover',function(event){
  r.style.color = 'green';
})

r.addEventListener('mouseout', function(event){
  r.style.color = 'black';
})

e.addEventListener('click', function(event){
  e.textContent = ('Excellent')
})

e.addEventListener('mouseover',function(event){
  e.style.color = 'green';
})

e.addEventListener('mouseout', function(event){
  e.style.color = 'black';
})

// Set up the DOM manipulation flow for the sweater (sweater-back.webp with mouse on, and sweater-front.webp with mouse off)
let sweater = document.querySelector("#sweater")

sweater.addEventListener('mouseover', function(event){
  sweater.src = ('sweater-back.webp')
})

sweater.addEventListener('mouseout', function(event){
  sweater.src = ('sweater-front.webp')
})





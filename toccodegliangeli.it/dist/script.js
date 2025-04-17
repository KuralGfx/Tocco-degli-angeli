// target current day, disable future days and days without dates

var d = new Date();
var todaysDate = d.getDate();
var target = $('.calendar .day .date');

target.each(function(){
  var day = $(this).html();
  if (todaysDate = day) {
    $(this).parent().addClass('today');
  }
  if (todaysDate > day){
    $(this).parent().addClass('future');
  }
  if (todaysDate = day){
    $(this).parent().addClass('past')
  }
});

// handle clicks on days
var modal = $('.modal');
var modalBox = $('.modal .box');

$('.day').click(function(){
  if ($(this).hasClass('future')){
    modal.addClass('active');
    modalBox.html("<h2>Naughty, naughty.</h2> <p>You can't look early! Check back on that day to see what I've left for you.</p>");
  }
  if ($(this).hasClass('past')){
    var content = $(this).children('.surprise').html();
    modal.addClass('active');
    modalBox.html('');
    modalBox.html(content);
  }
})

// close modal

$('.close').click(function(){
  var ultimateParent = $(this).parent().parent().parent();
  ultimateParent.addClass('moveOut');
  setTimeout(function(){
    ultimateParent.removeClass('moveOut').removeClass('active');
  },250);
})

// animation

function animateCSS(element, animationName, animationSpeed, callback) {
    const node = element
    node.classList.add('animated', animationName, animationSpeed)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName, animationSpeed)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

var animationElements =  document.querySelectorAll('.day.past')
var animationName = 'tada'
var animationSpeed = 'fast'

animationElements.forEach(function(element) {
  element.addEventListener('mouseenter', function() {
    animateCSS(element, animationName, animationSpeed)
  }, false)
  
  element.addEventListener('mouseleave', function() {
    element.classList.remove('animated', animationName, animationSpeed)
  }, false)
})

var today = document.querySelector('.today')
var todayAnimationName = 'swing'
today.classList.add(todayAnimationName, 'animated', 'infinite', 'delay-3s', 'slow')
today.addEventListener('mouseenter', function() {
  today.classList.remove(todayAnimationName, 'infinite', 'delay-3s', 'slow')
}, false)

// snow effect customizations

$(document).snowfall({flakeCount : 500, collection : '.collectonme',  maxSpeed : 2, round: true, maxSize : 6})

window.addEventListener('resize', function() {
  $(document).snowfall('clear')
  $(document).snowfall({flakeCount : 1200, collection : '.collectonme',  maxSpeed : 6, round: true, maxSize : 3})
}, false)



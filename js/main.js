//Applying roll-over animation on classes using animation.css
$(function(){
      "use strict"; 
    
      $(".primary-btn, .primary-line-btn, .info-box").mouseenter(function(event) {
          $(this).addClass("animated pulse");
      });
      
      $(".primary-btn, .primary-line-btn, .info-box").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
          $(this).removeClass("animated pulse");
      });
  });

//Header Scroll
const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) { 
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  } 
};
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();

//Responsive button menu
$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});



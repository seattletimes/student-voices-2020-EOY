// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");

// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

var $ = require('jquery');

var padding = $( window ).width() > 770 ? '35vh' : '50vh';


$( ".box" ).click(function() {
  var storyNum = $(this).find('.overlay').data("number");

  $('.container').find(`.overlay`).css("opacity",0);

  $('.container').css("padding-bottom",padding);

  $('.container').find(`.story[data-number='${storyNum}']`).css("display","block");

  $(".box").css("opacity",0.7);
  clearTimeout(timer);

});

$( ".fa-times-circle" ).click(function() {
  $(this).parent(".story").css("display","none");
  $(".box").css("opacity",1);
  $('.container').css("padding-bottom",'5vh');
  loop();
});

var timer;

var randomArray = [5, 6, 7, 4, 9];
var start = 0;




  function loop() {

    $('.container').find(`.overlay[data-number='${randomArray[start]}']`).css("opacity",1);
    $('.container').find(`.overlay[data-number='${randomArray[start]}']`).delay(4000).queue(function (next) {
    $(this).css("opacity",0);
    next();
  });

    start = (start === 4) ? 0 : start + 1;
    timer = window.setTimeout(loop, 5000);


  }


$( document ).ready(function() {

  loop();

});

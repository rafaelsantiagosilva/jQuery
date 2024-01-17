"use strict";

// slideDown()
$("#flip-slide-down").click(() => {
     $("#panel-slide-down").slideDown();
})

// slideUp()
$("#flip-slide-up").click(function (e) { 
     $("#panel-slide-up").slideUp();
});

// slideToggle()
$("#flip-slide-toggle").click(function (e) { 
     $("#panel-slide-toggle").slideToggle();
});
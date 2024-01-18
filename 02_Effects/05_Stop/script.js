"use strict";

// slideDown()
$("#btn-active").click(() => {
     $("#panel-slide-down").slideToggle("slow");
})

// stop()
$("#btn-stop").click(function() {
  $("#panel-slide-down").stop();   
})
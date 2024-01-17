"use strict";

// fadeIn()
$("#btn-fade-in").click(function () {
     $("#red-fade-in").fadeIn();
     $("#green-fade-in").fadeIn("slow");
     $("#blue-fade-in").fadeIn(3000);
});

// fadeOut()
$("#btn-fade-out").click(function () {
     $("#red-fade-out").fadeOut();
     $("#green-fade-out").fadeOut("slow");
     $("#blue-fade-out").fadeOut(3000);
});

// fadeToggle()
$("#btn-fade-toggle").click(function () {
     $("#red-fade-toggle").fadeToggle();
     $("#green-fade-toggle").fadeToggle("slow");
     $("#blue-fade-toggle").fadeToggle(3000);
});

// fadeTo(speed, opacity)
$("#btn-fade-to").click(function () {
     $("#red-fade-to").fadeTo("fast", 0.15);
     $("#green-fade-to").fadeTo("slow", 0.4);
     $("#blue-fade-to").fadeTo(3000, 0.7);
});
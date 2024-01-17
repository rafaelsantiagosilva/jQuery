"use strict"

// Funções hide e show
$("#btn-hide").click(function() {
     $("#my-paragraph").hide();
});

$("#btn-show").click(function() {
     $("#my-paragraph").show();
});

// Atrasando-as
$("#btn-slow-hide").click(function() {
     $("#my-slow-paragraph").hide(1000);
});

$("#btn-slow-show").click(function() {
     $("#my-slow-paragraph").show(1000);
});

// Toggle
$("#btn-toggle").click(function() {
     $("#my-toggle-paragraph").toggle(100);
})
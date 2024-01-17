"use strict";

// Indo para a direita
$("#btn-go-to-right").click(function () {
     $("#go-to-right").animate({ left: "250px" });
});

// Múltiplas propriedades
$("#btn-multiple-props").click(function () {
     $("#multiple-props").animate({
          left: "250px",
          opacity: "0.5",
          height: '150px',
          width: '150px'
     });
});

// Valores relativos
$("#btn-relative-values").click(function () {
     $("#relative-values").animate({
          left: "250px",
          height: '+=150px',
          width: '+=150px'
     });
});

// Valores pré-definidos
$("#btn-pre-defined-values").click(function () {
     $("#pre-defined-values").animate({
          height: 'toggle',
     });
});

// Queue
$("#btn-queue-example-1").click(function () {
     const MY_DIV_DOM_EX1 = $('#queue-example-1');
     MY_DIV_DOM_EX1.animate({ height: '300px', opacity: '0.4' }, "slow");
     MY_DIV_DOM_EX1.animate({ width: '300px', opacity: '0.8' }, "slow");
     MY_DIV_DOM_EX1.animate({ height: '100px', opacity: '0.4' }, "slow");
     MY_DIV_DOM_EX1.animate({ width: '100px', opacity: '0.8' }, "slow");
     MY_DIV_DOM_EX1.animate({ opacity: "1" }, "fast");
});

$("#btn-queue-example-2").click(function () {
     const MY_DIV_DOM_EX2 = $('#queue-example-2');
     MY_DIV_DOM_EX2.html("OLÁ")
     MY_DIV_DOM_EX2.animate({ width: "200px" }, "slow");
     MY_DIV_DOM_EX2.animate({ left: '100px' }, "slow");
     MY_DIV_DOM_EX2.animate({ fontSize: '3em' }, "slow");
});
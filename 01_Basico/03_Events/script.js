$(document).ready(() => {
     $("#oneclick-hide").click(function () {
          $(this).hide();
     });

     $("#dblclick-hide").dblclick(function () {
          $(this).hide();
     });

     $("#enter").mouseenter(function () {
          $(this).text("ENTROUUU!");
     })

     $("#leave").mouseleave(function () {
          $(this).text("SAIUUUUUUUU!");
     });

     $("#mousedown").mousedown(function () {
          $(this).text("APERTOUUUU!")
     });

     $("#mouseup").mouseup(function () {
          $(this).text("SOLTOUUUUUUU!");
     });

     $("#mousehover").hover(
          function () {
               $(this).text("ENTROUUUUU!");
          },

          function () {
               $(this).text("SAIUUUUUUU!");
          }
     );

     $("#onfocus").focus(function () {
          $(this).css("background-color", "black");
          $(this).css("color", "white");
     });

     $("#onblur").blur(function () {
          $(this).css("background-color", "red");
     });
});

 $(function () {
   // loading Effect
   $(window).on('load', function () {
     $(this).scrollTop(0);
     $(".se-pre-con").fadeOut(6000); //The time it take
   });
   window.onbeforeunload = function () {
     window.scrollTo(0, 0);
   };
 });
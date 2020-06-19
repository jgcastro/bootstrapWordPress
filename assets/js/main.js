$(function () {
  //CACHE WINDOW OBJECT
  var $window = $(window);

  //PARALLAX BACKGROUND EFFECT
  $('section[data-type="background"]').each(function () {
    var $bgobj = $(this); //ASSIGNING THE OBJECT
    $($window).scroll(function () {
      //SCROLL THE BACKGROUND AT CONST SPEED
      // THE yPos IS NEGATIVE VALUE BECAUSE WE'RE SCROLLING IT UP
      var yPos = -($window.scrollTop() / $bgobj.data("speed"));
      //PUT TOGETHER OUR FINAL BACKGROUND POSITION
      var coords = "50% " + yPos + "px";
      //MOVE THE BACKGROUND
      $bgobj.css({ backgroundPosition: coords });
    }); //END WINDOW SCROLL
  });
});

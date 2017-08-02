$(document).ready(function(){

  // Navigation animation
  var $navigation = $('#navigation');
  var $logo = $('#logo-container');
  var $textColour = $('.text-colour');

  $logo.css('visibility', 'hidden');
  $textColour.css('color', 'rgba(70, 166, 220, 1');

  // get the navbar height
  var navbarHeight = $navigation.outerHeight();

  // get the hero height
  var heroHeight = $('#index-banner').outerHeight();

  // this is the point where the opacity should be 0%
  // the fading will be faster/slower depending on the number (default: 3)
  var min = heroHeight - 3 * navbarHeight;

  // this is the point where the opacity should be 100%
  var max = heroHeight - navbarHeight;

  // Navbar fade in and out
  var previousScrollPosition = -1;

  $(window).scroll(function() {

    var currentScroll = $(this).scrollTop();
    var scrollTop = $(window).scrollTop();
    var opacity = (scrollTop - min) / (max - min);

    if (opacity < 0.5) {
      $logo.css('visibility', 'hidden');
      $textColour.css('color', 'rgba(70, 166, 220, 1');
     } else {
        $logo.css('visibility', 'visible');
        $textColour.css('color', 'rgba(45, 46, 56, 1');
      }

    $navigation
      .css('background-color', 'rgba(255, 255, 255, ' + opacity + ')');
  });

});

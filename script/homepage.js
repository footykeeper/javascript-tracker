var scrollReady = false;

$(document).ready(function () {
  $('.spacer').css({height: String($(window).height() + 'px')});
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $('#navbar').addClass('go-white');
    $('#navbar').removeClass('go-transparent');
    scrollReady = true;
  } else if (scroll <= 50 && scrollReady) {
    $('#navbar').removeClass('go-white');
    $('#navbar').addClass('go-back');
  }
  var desiredHeadlineOpacity = (75 - scroll) / 50;
  document.getElementById('headline').style.opacity = desiredHeadlineOpacity;
  
  var desiredContentOpacity = scroll / 75;
  document.getElementById('content').style.opacity = desiredContentOpacity;
});

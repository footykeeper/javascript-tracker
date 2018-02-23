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

$('#addPlayer').click(function () {
  $('#playerInputs').append('<br/><br/><input type="text" placeholder="Player Name" class="pName" onkeyup="updateRoster();"/>');
});

function updateRoster () {
  var roster = [];
  var names = document.getElementsByClassName('pName');
  var i;

  for (i = 0; i < names.length; i++) {
    roster.push(names[i].value);
  }

  $('#rosterDisplay').html(JSON.stringify(roster));
}

$('#toRoster').click(function () {
  $("html, body").animate({scrollTop: $('#creator').offset().top}, 1000);
});

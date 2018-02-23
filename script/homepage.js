function getParameters () {
  var fullUrl = window.location.href;
  var splitUrl = fullUrl.split('?');
  if (splitUrl.length === 1) {
    return null;
  }
  var parameters = splitUrl[1].split('&');
  var i;
  var result = '{';
  var currentParameter = '';
  for (i = 0; i < parameters.length; i++) {
    currentParameter = parameters[i].split('=');
    if (i > 0) {
      result += ',';
    }

    if (!isNaN(parseInt(currentParameter[1], 10))) {
      result += '"' + currentParameter[0] + '":' + currentParameter[1];
    } else if (currentParameter[1] === 'true' || currentParameter[1] === 'false') {
      result += '"' + currentParameter[0] + '":' + currentParameter[1];
    } else {
      result += '"' + currentParameter[0] + '":"' + currentParameter[1] + '"';
    }
  }
  result += '}';
  return result;
}

var scrollReady = false;

$(document).ready(function () {
  var parameters = JSON.parse(getParameters());
  $('.spacer').css({height: String($(window).height() + 'px')});
  if (parameters.scroll === 'true') {
    $("html, body").animate({scrollTop: $('#creator').offset().top - $('#navbar').height()}, 1000);
  }
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
  $("html, body").animate({scrollTop: $('#creator').offset().top - $('#navbar').height()}, 1000);
});

var players = [];

$('#sendRoster').click(function () {
  var playerNames = JSON.parse($('#rostInp').val());
  var i;
  
  for (i = 0; i < playerNames.length; i++) {
    players.push({});
  }

  for (i = 0; i < players.length; i++) {
    players[i].playerName = playerNames[i];
    players[i].points = 0;
    players[i].goals = 0;
    players[i].assists = 0;
    players[i].shots = 0;
    players[i].crosses = 0;
    players[i].saves = 0;
    players[i].tackles = 0;
    players[i].yellows = 0;
    players[i].reds = 0;
  }
  
  for (i = 0; i < players.length; i++) {
    $('#statInput').append('<tr id="prow' + i + '" style="font-size: 25px"><td>' + players[i].playerName + '</td><td><div onclick="registerEvent(this)" class="input-button goals">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus goals">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus goals">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button assists">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus assists">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus assists">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button shots">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus shots">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus shots">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button crosses">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus crosses">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus crosses">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button saves">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus saves">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus saves">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button tackles">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus tackles">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus tackles">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button yellows">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus yellows">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus yellows">-&nbsp;</div></td><td><div onclick="registerEvent(this)" class="input-button reds">0&nbsp;</div><div onclick="registerEvent(this)" class="input-button plus reds">+&nbsp;</div><div onclick="registerEvent(this)" class="input-button minus reds">-&nbsp;</div></td></tr>');
  }
  
  $('#rosterInput').hide();
  $('#main').show();
});

function registerEvent (clickedElement) {
  var parentID = $(clickedElement).parent().parent().attr('id');
  var parentString = parentID.split('prow');
  var parentInt = parseInt(parentString[1], 10);
  var currentInt = 0;
  if ($(clickedElement).hasClass('goals')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].goals++;
      currentInt = players[parentInt].goals;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].goals--;
      currentInt = players[parentInt].goals;
    }
  } else if ($(clickedElement).hasClass('assists')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].assists++;
      currentInt = players[parentInt].assists;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].assists--;
      currentInt = players[parentInt].assists;
    }
  } else if ($(clickedElement).hasClass('crosses')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].crosses++;
      currentInt = players[parentInt].crosses;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].crosses--;
      currentInt = players[parentInt].crosses;
    }
  } else if ($(clickedElement).hasClass('shots')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].shots++;
      currentInt = players[parentInt].shots;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].shots--;
      currentInt = players[parentInt].shots;
    }
  } else if ($(clickedElement).hasClass('saves')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].saves++;
      currentInt = players[parentInt].saves;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].saves--;
      currentInt = players[parentInt].saves;
    }
  } else if ($(clickedElement).hasClass('tackles')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].tackles++;
      currentInt = players[parentInt].tackles;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].tackles--;
      currentInt = players[parentInt].tackles;
    }
  } else if ($(clickedElement).hasClass('yellows')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].yellows++;
      currentInt = players[parentInt].yellows;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].yellows--;
      currentInt = players[parentInt].yellows;
    }
  } else if ($(clickedElement).hasClass('reds')) {
    if ($(clickedElement).hasClass('plus')) {
      players[parentInt].reds++;
      currentInt = players[parentInt].reds;
    } else if ($(clickedElement).hasClass('minus')) {
      players[parentInt].reds--;
      currentInt = players[parentInt].reds;
    }
  }
  $(clickedElement).parent().children().not('.plus, .minus').html(currentInt + '&nbsp;');
}

var players = {};

$('#sendRoster').click(function () {
  players = JSON.parse($('#rostInp').val());
  var i;
  
  for (i = 0; i < players.length; i++) {
    players[i].points = 0;
    players[i].goals = 0;
    players[i].assists = 0;
    players[i].shots = 0;
    players[i].crosses = 0;
    players[i].ownGoals = 0;
    players[i].saves = 0;
    players[i].interceptions = 0;
    players[i].tackles = 0;
    players[i].penaltiesSaved = 0;
    players[i].yellows = 0;
    players[i].reds = 0;
  }
  $('#rosterInput').hide();
  $('#main').show();
});

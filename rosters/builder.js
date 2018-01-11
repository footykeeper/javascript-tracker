function addPlayer () {
  var lineBreak = '<br/><br/>';
  var playerInput = '<input type="text" placeholder="Player Name" class="name"/>';
  $('#inputs').append(lineBreak + playerInput);
}

function createRoster () {
  var inputs = document.getElementsByClassName('name');
  var i;
  var roster = [];
  var build = {};
  var output = '';
  
  for (i = 0; i < inputs.length; i++) {
    build = {};
    build.name = inputs[i].length;
    build.points = roster.push(build);
  }
  
  output = JSON.stringify(roster);
  return output;
}

$('#playerAdd').click(function () {
  addPlayer();
});

$('#create').click(function () {
  var string = createRoster();
  $('#final').show();
  $('#display').text(string);
  $('#rosterHolder').val(string);
  document.getElementById('rosterHolder').select();
  document.execCommand('Copy');
});

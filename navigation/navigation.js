$(document).ready(function () {
  var links = [
    {
      name: 'Home',
      url: '/'
    }, {
      name: 'Tracker',
      url: '/tracker/'
    }, {
      name: 'Roster Creator',
      url: '/rosters/'
    }
  ];
  var i;
  var jars = document.getElementsByClassName('_navigation');
  var navString = '';
  
  for (i = 0; i < links.length; i++) {
    navString += '<a href="' + links[i].url + '"><div class="w3-button">' + links[i].name + '</div></a>';
  }
  
  for (i = 0; i < jars.length; i++) {
    jars[i].innerHTML = navString;
  }
});

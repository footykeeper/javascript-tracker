$(document).ready(function () {
  var href = document.location.hostname;
  var links = [];
  if (href === 'footykeeper.github.io' || href === 'www.footykeeper.io') {
    links = [
      {
        name: 'Home',
        url: '/javascript-tracker/'
      }, {
        name: 'Tracker',
        url: '/javascript-tracker/tracker/'
      }, {
        name: 'Roster Creator',
        url: '/javascript-tracker/rosters/'
      }
    ];
  } else if (href === 'footykeeper.com' || href === 'www.footykeeper.com') {
    links = [
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
  }
  
  var i;
  var jars = document.getElementsByClassName('_navigation');
  var navString = '';
  
  for (i = 0; i < links.length; i++) {
    navString += '<a href="' + links[i].url + '"><div class="w3-button">' + links[i].name + '</div></a>';
  }
  
  for (i = 0; i < jars.length; i++) {
    jars[i].innerHTML = navString;
    jars[i].style.zIndex = '99';
  }
});

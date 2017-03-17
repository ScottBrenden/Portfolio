'use strict';

var navBar = {};

navBar.handleMainNav = function() {
  $('nav').on('click', '.nav-item', function(){
    $('section').hide();
    $('#about').on('click', function(){
      $('#about').show();
    });
    $('#projects').on('click', function(){
      $('#projects').show();
    });
    $('#work-hist').on('click', function(){
      $('#work-hist').show();
    });
  });
};

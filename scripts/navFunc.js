'use strict';

// $('a').on('click', function(event){
//   event.preventDefault();
//
// });

var navBar = {};

navBar.handleMainNav = function() {
  $('.navbar').on('click', '.nav-item', function(){
    $('.page').hide();
    $('#' + $(this).attr('data-content')).fadeIn('slow');
  });
  $('.navbar .nav-item:first').click();
};

$(document).ready(function(){
  navBar.handleMainNav();
});

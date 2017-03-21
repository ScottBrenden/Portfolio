'use strict';

var navBar = {};

navBar.handleMainNav = function() {
  $('.navbar').on('click', '.nav-item', function(){
    $('.page').hide();
    $('#' + $(this).attr('data-content')).fadeIn('slow');
  });
  $('.navbar .nav-item:first').click();
};
navBar.handleMainNav();

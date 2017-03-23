'use strict';

const navBar = {};

navBar.handleMainNav = function() {
  $('.navbar').on('click', '.nav-item', function(){
    $('.page').hide();
    $('#' + $(this).attr('data-content')).slideDown('fast');
  });
  $('.navbar .nav-item:first').click();
};
navBar.handleMainNav();

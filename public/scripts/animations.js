'use strict';

if($(window).width() < 700){
  $('.icon-menu').on('click', function(){
    if ($('.nav-menu').hasClass('is-hide')){
      $('.nav-menu').slideDown('fast');
      $('.nav-menu').removeClass('is-hide');
    } else {
      $('.nav-menu').slideUp('fast');
      $('.nav-menu').addClass('is-hide');
    }
  });
};

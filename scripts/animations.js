'use strict';

$('.icon-menu').on('click', function(){
  if ($('.nav-menu').hasClass('hidden')){
    $('.nav-menu').slideDown('fast');
    $('.nav-menu').removeClass('hidden');
  } else {
    $('.nav-menu').slideUp('fast');
    $('.nav-menu').addClass('hidden');
  }
});

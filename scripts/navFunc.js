'use strict';
console.log('hello');
// $('a').on('click', function(event){
//   event.preventDefault();
//
// });

var navBar = {};

navBar.handleMainNav = function() {
  $('.navbar').on('click', '.nav-item', function(){
    $('.page').hide();
    $('#' + $(this).attr('data-content')).fadeIn('slow');
    console.log('#' + $(this).attr('data-content'));
  });
  $('.navbar .nav-item:first').click();
};
console.log('hi');
navBar.handleMainNav();

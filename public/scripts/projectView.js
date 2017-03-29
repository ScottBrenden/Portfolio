'use strict';

const projectView = {};

// I moved your handleMainNav() method into this file and attached it to your projectView object, then deleted the old file.
projectView.handleMainNav = function() {
  $('.navbar').on('click', '.nav-item', function(){
    $('.page').hide();
    $('#' + $(this).attr('data-content')).slideDown('fast');
  });
  $('.navbar .nav-item:first').click();
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(proj){
    $('#projects').append(proj.toHtml());
  });

  projectView.handleMainNav();
};

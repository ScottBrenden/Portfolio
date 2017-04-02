'use strict';

const projectView = {};

projectView.initIndexPage = function() {
  Project.all.forEach(function(proj){
    $('#projects').append(proj.toHtml());
  });
};

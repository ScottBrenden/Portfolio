'use strict';
var projects = [];

function Project(projData){
  this.name = projData.name,
  this.ref = projData.ref;
};

Project.prototype.toHtml = function () {
  var source = $('#project-template').text();

  var templateRender = Handlebars.compile(source);
  console.log(templateRender(this));

  return templateRender(this);
};

projectData.forEach(function(proj) {
  projects.push(new Project(proj));
});

projects.forEach(function(proj){
  $('#projects').append(proj.toHtml());
});

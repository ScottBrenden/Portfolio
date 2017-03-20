'use strict';
var projects = [];

function Project(projData){
  this.name = projData.name,
  this.ref = projData.ref;
};

Project.prototype.toHtml = function () {
  var source = $('#project-template').text();

  var templateRender = Handlebars.compile(source);
  // var $newProject = $('article.template').clone().removeClass('template');
  //
  // $newProject.find('a').attr('href', this.ref);
  // $newProject.find('a').text(this.name);

  return templateRender(this);
};

projectData.forEach(function(proj) {
  projects.push(new Project(proj));
});

projects.forEach(function(proj){
  $('#projects').append(proj.toHtml());
});
$('article.template').hide();

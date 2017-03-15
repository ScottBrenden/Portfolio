'use strict';
var projects = [];

function Project(name, link){
  this.name = name,
  this.ref = link;
};

var getfit = new Project('Get Fit', 'https://aesthetiques.github.io/swole_devs/');
var busMall = new Project('Bus Mall', 'https://scottbrenden.github.io/bus-mall/');
var salmonCookies = new Project('Salmon Cookies', 'https://scottbrenden.github.io/Salmon-cookies/');

var projectObjects = [getfit, busMall, salmonCookies];

Project.prototype.toHtml = function () {
  var $newProject = $('article.project-template').clone();
  $newProject.removeClass('project-template');
  console.log(this);
  console.log($newProject.name);
  $newProject.find('a').attr('href', this.ref);
  $newProject.find('a').text(this.name);

  // $newProject.append('<hr>');
  return $newProject;
};

projectObjects.forEach(function(proj) {
  projects.push(proj);
});

projects.forEach(function(p){
  $('#projects').append(p.toHtml());
});

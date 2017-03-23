'use strict';
// var projects = [];

function Project(projData){
  this.name = projData.name,
  this.ref = projData.ref;
};

Project.all = [];

Project.prototype.toHtml = function () {
  var source = $('#project-template').text();
  var templateRender = Handlebars.compile(source);
  console.log(source);
  return templateRender(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(element){
    Project.all.push(new Project(element));
  })
};

Project.fetchAll = function(){
  console.log('fetchAll');
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    $.getJSON('data/projectData.json', function(data){
      Project.loadAll(data);
      localStorage.setItem('rawData', JSON.stringify(Project.all));
      projectView.initIndexPage();
    })
  }
}

// projectData.forEach(function(proj) {
//   projects.push(new Project(proj));
// });

// Project.forEach(function(proj){
//   $('#projects').append(proj.toHtml());
// });

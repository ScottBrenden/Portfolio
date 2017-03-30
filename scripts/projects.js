'use strict';
// var projects = [];
(function(module){
  function Project(projData){
    this.name = projData.name,
    this.ref = projData.ref;
  };

  Project.all = [];

  Project.prototype.toHtml = function () {
    let source = $('#project-template').text();
    let templateRender = Handlebars.compile(source);

    return templateRender(this);
  };

  Project.loadAll = function(rawData) {
    rawData.forEach(function(element){
      Project.all.push(new Project(element));
    })
  };

  Project.fetchAll = function(){
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
  module.Project = Project;
})(window);

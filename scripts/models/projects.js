'use strict';
// var projects = [];
(function(module){
  function Project(projData){
    this.name = projData.name,
    this.ref = projData.ref,
    this.dateMade = projData.dateMade,
    this.disc = projData.disc;
  };

  Project.all = [];

  Project.prototype.toHtml = function () {
    let source = $('#project-template').text();
    let templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  Project.numWordsDisc = () => {
    return Project.all.map((project) => project.disc.split(' ').length).reduce((acc, val) => acc + val);
  }

  Project.loadAll = function(rawData) {
    rawData.forEach(function(element){
      Project.all.push(new Project(element));
    })
  };

  Project.fetchAll = function() {
    // console.log($.get('/projects'));
    // $.get('/projects').then(results => {
    //   console.log(Project.loadAll(results));
    //   Project.loadAll(results);
    //   callback();
    // })
    if (localStorage) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      projectView.initIndexPage();
    } else {
      $.getJSON('data/projectData.json', function(data){
        Project.loadAll(data);
        localStorage.setItem('rawData', JSON.stringify(Project.all));
        projectView.initIndexPage();
      })
    }
    console.log(Project.numWordsDisc());
  }
  module.Project = Project;
})(window);

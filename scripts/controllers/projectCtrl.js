'use strict';

(function(module) {
  const projectCtrl = {};

  projectCtrl.init= function() {
    Project.fetchAll(projectView.initIndexPage);
    $('.page').hide();
    $('#projects').fadeIn('fast');
  }
})(window);

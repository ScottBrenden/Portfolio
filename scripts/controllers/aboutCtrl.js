'use strict';

(function(module) {
  const aboutCtrl = {};

  aboutCtrl.init= function() {
    $('.page').hide();
    $('#about').fadeIn('fast');
  }
  module.aboutCtrl = aboutCtrl;
})(window);

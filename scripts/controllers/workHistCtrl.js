'use strict';

(function(module) {
  const workHistCtrl = {};

  workHistCtrl.init= function() {
    $('.page').hide();
    $('#work-hist').fadeIn('fast');
  }
  module.workHistCtrl = workHistCtrl;
})(window);

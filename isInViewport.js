
"use strict";

function isInViewport() {

  function __inView(el) {
    var bounds = el.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

  var self = {
    inView: function(el, cb) {
      for (var i=0; i<el.length; i++) {
        if (__inView(el[i])) {
          return cb(el);
        }
      }
    },
    isInView: function(el) {
      for (var i=0; i<el.length; i++) {
        return __inView(el[i]);
      };

    },
  };
  return self;
}

module.exports = isInViewport();

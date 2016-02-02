
"use strict";

function isInViewport() {

  function __inView(el) {
    var bounds = el.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0 && bounds.left < window.innerWidth && bounds.right > 0;
  }

  var self = {
    inView: function(el, cb) {
      if (el instanceof NodeList) {
        for (var i=0; i<el.length; i++) {
          if (__inView(el[i])) {
            cb(el);
          }
        }
      } else if (__inView(el)) {
        cb(el);
      }
      return el;
    },
    isInView: function(el) {
      if (el instanceof NodeList) {
        for (var i=0; i<el.length; i++) {
          if (!__inView(el[i])) {
            return false;
          }
        }
        return true;
      } else {
        return __inView(el);
      }
    },
  };
  return self;
}

module.exports = isInViewport();

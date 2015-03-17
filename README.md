# isInViewport
Checks to see if an element is visible in the users viewport.
No library dependencies, but you can use libraries for element selection if you choose.


## How to use
```
var isInViewport = require('./isInViewport');

window.onscroll = function() {

  isInViewport.inView(document.querySelectorAll('.icon--item i'), function(el){
    $(el).addClass('zoomIn');
  });
  console.log(isInViewport.isInView(document.querySelectorAll('.icon--item i')));
}
```

## API

### .inView(element, callback(element));
fires a callback when the element comes into view, it also returns the element passed to it.

### .isInView(element);
boolean returns true or false if the element is in the viewport.

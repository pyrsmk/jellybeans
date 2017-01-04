(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
    	return (root.jellybeans = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.jellybeans = factory();
  }
}(this, function() {
function Jellybeans() {
    var node,
        iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    while(node = iterator.nextNode()) {
        node.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}
return Jellybeans;
}));

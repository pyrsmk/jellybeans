function Jellybeans() {
    var node,
        iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);

    while(node = iterator.nextNode()) {
        node.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}
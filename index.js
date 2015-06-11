// Require and initialise fastn
var fastn = require('fastn/')({
    // component constructors.. Add what you need to use

    text: require('fastn/textComponent'), // Renders text
    _generic: require('fastn/genericComponent') // Renders DOM nodes
});

var something = fastn('h1', 'Hello World');

something.render();

// Wait till the document is ready.
window.addEventListener('load', function(){
    document.body.appendChild(something.element);
});
"use strict";

let Controls = {};

if ( typeof require === 'function' ) {
    const THREE = require('three');
}

Controls.moveLeft = function(obj) {
    console.log(obj);
}

if ( typeof exports !== "undefined" ) {
    module.exports = Controls;
}
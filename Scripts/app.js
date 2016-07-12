/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date July 12, 2016
 * 
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    // app entry function
    function init(){
        console.log('App Started');
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();
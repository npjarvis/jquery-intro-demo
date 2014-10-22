/* app.js
* main script file for our little application
* */

"use strict";

jQuery(document).ready(function () {
    // same syntax you would use in CSS to make a rule for all hyperlinks
    jQuery('p a[href!="#top"]').attr('target', '_blank');
    //to target specific paragraphs use jQuery('#sec1 p').
    jQuery('section').hide().slideDown(1000);

    // .click() is an event listener in jQuery
    jQuery('nav a, p a[href="#top"]').click(function(eventObject) {
        //keyword this refers to element that raised the event
        // console.log allows us to see whats happening
        console.log(this.hash);
        var targetElement = jQuery(this.hash);
        //scrolling example: firefox and chrome use different elements for scrolls, such as html,body
        jQuery('html,body').animate({scrollTop: targetElement.offset().top}, 700);

        eventObject.preventDefault();
    });
});
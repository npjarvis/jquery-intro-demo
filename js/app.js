/* app.js
* main script file for our little application
* */

"use strict";

$(document).ready(function () {
    // same syntax you would use in CSS to make a rule for all hyperlinks
    $('p a[href!="#top"]').attr('target', '_blank');
    //to target specific paragraphs use jQuery('#sec1 p').
    $('section').hide().slideDown(1000);

    // .click() is an event listener in jQuery
    $('nav a, p a[href="#top"]').click(function(eventObject) {
        //keyword this refers to element that raised the event
        // console.log allows us to see whats happening
        console.log(this.hash);
        var targetElement = jQuery(this.hash);
        //scrolling example: firefox and chrome use different elements for scrolls, such as html,body
        $('html,body').animate({
            // set scroll top value to targetElement.offset().top - navHeight
            scrollTop: targetElement.offset().top - navHeight

        }, 700);

        eventObject.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceHolder = $('.nav-placeholder');
    navPlaceHolder.height(navHeight);

    // "scrolling" event happens on window object

    $(window).scroll(function () {
       var scrollPos = $(this).scrollTop();
       //console.log(scrollPos)
        if (scrollPos > navTop) {
            //nav-fixed is a class defined in main.css
            nav.addClass('nav-fixed');
            navPlaceHolder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceHolder.hide();
        }
    });
    // type in button you want the click event on
    $('#exit-button').click(function () {
       // must get reference to div in html that references the modal
        $('#confirm-exit-modal').modal();
    });

    $('#confirm-exit-button').click(function () {
        window.location ='https://ischool.uw.edu';
    });

});
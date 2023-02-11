$(document).ready(function(){
        $('section').css('width',$(window).width());
        $(window).resize(function(){
            $('section').css('width',$(window).width());
            /* and in your CSS: section { overflow: hidden; } */
        });
    });

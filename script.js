var scrollWaarde;
var laatstePositie = 0;
var naviMenu = $('nav');
var menuHoogte = naviMenu.outerHeight();

function verschuifMenu(){
    scrollWaarde = $(this).scrollTop();
    if(scrollWaarde>laatstePositie) {
        //we scrollen naar beneden.
        console.log('we scrollen naar beneden');
        laatstePositie = scrollWaarde;
        naviMenu.css('top', -menuHoogte +'px');
    } else{
        // we scrollen naar beneden
        console.log('haal het menu');
        laatstePositie = scrollWaarde;
        naviMenu.css('top', 0);
    }
    
    console.log(scrollWaarde);
}

$(window).on('scroll', verschuifMenu);
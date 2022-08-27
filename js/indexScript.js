$(document).ready(function(){
    $('.slick-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        zIndex: 0,
    });
});

var item = parseInt($('.mainSlider').css('width'));
if(item > 425) {
    $('.mainSliderDecoration').css('width', item* 0.535 + 'px');

    $('body').css('--textDecorationBorderRight--', item* 0.3 + 'px')
} else {
    $('.mainSliderDecoration').css('width', item + 'px');
}

var locationOne = {lat: 49.7993871, lng: 30.1168922};
var locationTwo = {lat: 49.7871995, lng: 30.1488960};
var center = {lat: 49.7912728, lng: 30.1305992};
var zoomSize ;
window.innerWidth <= 500? zoomSize = 13 : zoomSize = 14;

function initMap () {
    var opt =  {
        center: center,
        zoom: zoomSize
    }
    var mymap = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({
        position: locationOne, map:mymap
    });
    
    var marker = new google.maps.Marker({
        position: locationTwo, map:mymap
    });
}

function sideSliderControlTWo() {
    let heiht = window.innerHeight + 1;
    if(parseInt($('.mobileNavigation').css('height')) == 48) {
        document.getElementById("side").style.height = heiht + 'px';
        $('body').css('overflow', 'hidden');
        $('.mobileNavigation').css('background', 'black');
        $('#but').css('background', 'black');
    } else {
        document.getElementById("side").style.height = "48px";
        $('body').css('overflow', 'visible');
        $('.mobileNavigation').css('background', '#1D1D1D');
        $('#but').css('background', '#1D1D1D');
    }
}

function checkSlider() {
    var blockPosition = $('.slick-slider').offset().top, 
    windowScrollPosition = $(window).scrollTop();

    if( windowScrollPosition < blockPosition ) {
        return true;
    }
}

function mobileNavigationOnScreen() {
    return $('.mobileNavigation').css('display') == 'flex';
}


function scroll() { // ID откуда кливаем
    let scrollWidth;
    if(mobileNavigationOnScreen()) {
        scrollWidth = $(".footer").offset().top- window.innerHeight;
    } else {
        scrollWidth = $(".footer").offset().top;
    }
    $('html, body').animate({
    scrollTop: scrollWidth  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
}



$("#footerScroll").click(scroll);
$("#footerScrollmobile").click(function() {
    document.getElementById("side").style.height = "48px";
    $('.mobileNavigation').css('background', '#1D1D1D');
    $('#but').css('background', '#1D1D1D');
    $('body').css('overflow', 'visible');
    scroll();
});
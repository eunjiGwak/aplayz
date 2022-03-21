$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.pg01',
            type: 'bullets',
        },

        autoplay: {
            delay: 3000,
        },

        loop: false,
        speed: 1000,
        grabCursor: false,

        //mousewheel: true,
        //keyboard: {
        //enabled: true,
        //},

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });

    var pagingSwiper = new Swiper(".swiper-container", {
        pagination: {
            el: ".pg02",
            type: "fraction",
        },
    });
    
    
    // num 정리
    var $subBox01 = $('.full_box .full_con01 .substance_box');
    var $subBox01St = $('.full_box .full_con01 .substance_box strong');
    var $subBox01H = $subBox01St.height();
    $subBox01.css("height", $subBox01H);
    $subBox01.css("margin-top", -$subBox01H/2);
    
    var $subBox02 = $('.full_box .full_con02 .substance_box');
    var $subBox02St = $('.full_box .full_con02 .substance_box strong');
    var $subBox02H = $subBox02St.height();
    $subBox02.css("height", $subBox02H);
    $subBox02.css("margin-top", -$subBox02H/2);
    
    var $subBox03 = $('.full_box .full_con03 .substance_box');
    var $subBox03St = $('.full_box .full_con03 .substance_box strong');
    var $subBox03H = $subBox03St.height();
    $subBox03.css("height", $subBox03H);
    $subBox03.css("margin-top", -$subBox03H/2);
    
    var $subBox04 = $('.full_box .full_con04 .substance_box');
    var $subBox04St = $('.full_box .full_con04 .substance_box strong');
    var $subBox04H = $subBox04St.height();
    $subBox04.css("height", $subBox04H);
    $subBox04.css("margin-top", -$subBox04H/2);
    
    $( window ).resize( function() {
        var $subBox01 = $('.full_box .full_con01 .substance_box');
        var $subBox01St = $('.full_box .full_con01 .substance_box strong');
        var $subBox01H = $subBox01St.height();
        $subBox01.css("height", $subBox01H);
        $subBox01.css("margin-top", -$subBox01H/2);

        var $subBox02 = $('.full_box .full_con02 .substance_box');
        var $subBox02St = $('.full_box .full_con02 .substance_box strong');
        var $subBox02H = $subBox02St.height();
        $subBox02.css("height", $subBox02H);
        $subBox02.css("margin-top", -$subBox02H/2);

        var $subBox03 = $('.full_box .full_con03 .substance_box');
        var $subBox03St = $('.full_box .full_con03 .substance_box strong');
        var $subBox03H = $subBox03St.height();
        $subBox03.css("height", $subBox03H);
        $subBox03.css("margin-top", -$subBox03H/2);

        var $subBox04 = $('.full_box .full_con04 .substance_box');
        var $subBox04St = $('.full_box .full_con04 .substance_box strong');
        var $subBox04H = $subBox04St.height();
        $subBox04.css("height", $subBox04H);
        $subBox04.css("margin-top", -$subBox04H/2);
    });
    
    $(window).resize(function(){ 
        if (window.innerWidth <= 820) { 
            $('#header .logo img').attr('src','images/logo_m.png');
        } else { 
            $('#header .logo img').attr('src','images/logo.png')
        } }).resize();

    
});


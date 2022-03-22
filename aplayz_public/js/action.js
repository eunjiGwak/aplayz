$(document).ready(function () {
    var fullSwiper = new Swiper('.full_wrap', {
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
            nextEl: ".cp_sl_next",
            prevEl: ".cp_sl_prev"
        },
    });

    var pagingSwiper = new Swiper(".swiper-container", {
        pagination: {
            el: ".pg02",
            type: "fraction",
        },
    });

    var listSwiper = new Swiper('.ev_con_img_box', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        slidesPerView: 6.05,
        spaceBetween: 80,
        centeredSlides: true,

        loop: true,
        speed: 1000,
        //grabCursor: false,

        mousewheel: true,
        keyboard: {
            enabled: true,
        },

        noSwiping: true,
        touchRatio: 0,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,

        breakpoints: {
            820: {
                slidesPerView: 2.5,
            },
        }


    });


    // num 정리
    var $subBox01 = $('.full_box .full_con01 .substance_box');
    var $subBox01St = $('.full_box .full_con01 .substance_box strong');
    var $subBox01H = $subBox01St.height();
    $subBox01.css("height", $subBox01H);
    $subBox01.css("margin-top", -$subBox01H / 2);

    var $subBox02 = $('.full_box .full_con02 .substance_box');
    var $subBox02St = $('.full_box .full_con02 .substance_box strong');
    var $subBox02H = $subBox02St.height();
    $subBox02.css("height", $subBox02H);
    $subBox02.css("margin-top", -$subBox02H / 2);

    var $subBox03 = $('.full_box .full_con03 .substance_box');
    var $subBox03St = $('.full_box .full_con03 .substance_box strong');
    var $subBox03H = $subBox03St.height();
    $subBox03.css("height", $subBox03H);
    $subBox03.css("margin-top", -$subBox03H / 2);

    var $subBox04 = $('.full_box .full_con04 .substance_box');
    var $subBox04St = $('.full_box .full_con04 .substance_box strong');
    var $subBox04H = $subBox04St.height();
    $subBox04.css("height", $subBox04H);
    $subBox04.css("margin-top", -$subBox04H / 2);

    $(window).resize(function () {
        var $subBox01 = $('.full_box .full_con01 .substance_box');
        var $subBox01St = $('.full_box .full_con01 .substance_box strong');
        var $subBox01H = $subBox01St.height();
        $subBox01.css("height", $subBox01H);
        $subBox01.css("margin-top", -$subBox01H / 2);

        var $subBox02 = $('.full_box .full_con02 .substance_box');
        var $subBox02St = $('.full_box .full_con02 .substance_box strong');
        var $subBox02H = $subBox02St.height();
        $subBox02.css("height", $subBox02H);
        $subBox02.css("margin-top", -$subBox02H / 2);

        var $subBox03 = $('.full_box .full_con03 .substance_box');
        var $subBox03St = $('.full_box .full_con03 .substance_box strong');
        var $subBox03H = $subBox03St.height();
        $subBox03.css("height", $subBox03H);
        $subBox03.css("margin-top", -$subBox03H / 2);

        var $subBox04 = $('.full_box .full_con04 .substance_box');
        var $subBox04St = $('.full_box .full_con04 .substance_box strong');
        var $subBox04H = $subBox04St.height();
        $subBox04.css("height", $subBox04H);
        $subBox04.css("margin-top", -$subBox04H / 2);
    });

    $(window).resize(function () {
        if (window.innerWidth <= 820) {
            $('#header .logo img').attr('src', 'images/logo_m.png');
            $('.ev_main_con01 ul li.link01 a img').attr('src', 'images/ev_main_m_con01_icon01.png');
            $('.ev_main_con01 ul li.link02 a img').attr('src', 'images/ev_main_m_con01_icon02.png');
            $('.ev_main_con06 .con06_img01 img').attr('src', 'images/ev_main_m_con06_img.png');
        } else {
            $('#header .logo img').attr('src', 'images/logo.png');
            $('.ev_main_con01 ul li.link01 a img').attr('src', 'images/ev_main_con01_icon01.png');
            $('.ev_main_con01 ul li.link02 a img').attr('src', 'images/ev_main_con01_icon02.png');
            $('.ev_main_con06 .con06_img01 img').attr('src', 'images/ev_main_con06_img.png');
        }
    }).resize();

    $('.counter').counterUp({
        delay: 30,
        time: 1000
    });



});
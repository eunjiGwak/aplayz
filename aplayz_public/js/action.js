$(document).ready(function () {
    
    // 새로고침시 항상 최상단
    history.scrollRestoration = "manual"
    
    //카운트다운
    $('.counter').counterUp({
        delay: 100,
        time: 500
    });
    
    //fadeIn 효과
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    })
    wow.init();

    //이벤트 메인 타이틀
    var ms = 1000;
    var timeText = function () {
        $('.title_box .title').addClass('on');
        $('.title_box .title_bg').addClass('on');
        $('.title_box .title_icon').addClass('on');
        $('.ev_main_con02').addClass('on');
    }
    setTimeout(timeText, ms);
    
    var scrollTop = $(window).scrollTop();
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        $(window).resize(function () {
            if (window.innerWidth <= 820) {
                var widthVw_m = parseInt($(window).width() * 0.655);
                var titleVw = $('.title_box').offset().top;
                if (scrollTop >= widthVw_m) {
                    $('.title_box').addClass('scroll');
                    console.log(titleVw);
                } else {
                    $('.title_box').removeClass('scroll');
                }
            } else {
                var widthVw_pc = parseInt($(window).width() * 0.218);
                var titleVw = $('.title_box').offset().top;
                if (scrollTop >= widthVw_pc) {
                    $('.title_box').addClass('scroll');
                    console.log(titleVw);
                } else {
                    $('.title_box').removeClass('scroll');
                }
            }
        }).resize();
    });
    
    // 선곡리스트
    var listSwiper = new Swiper('.ev_con_img_box', {
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },

        slidesPerView: 6.05,
        spaceBetween: 80,
        centeredSlides: true,

        loop: true,
        speed: 1000,
        noSwiping: true,
        touchRatio: 0,
        preventClicksPropagation: false,
        preventClicks: false,
        allowTouchMove: false,
        breakpoints: {
            820: {
                slidesPerView: 3,
            },
            375: {
                slidesPerView: 3.5,
            },
        },
    });
    
    
    //법인메인 전체 슬라이드
    var fullSwiper = new Swiper('.full_wrap', {
        pagination: {
            el: '.pg01',
            type: 'bullets',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: false,
        speed: 1000,
        grabCursor: false,

        navigation: {
            nextEl: ".cp_sl_next",
            prevEl: ".cp_sl_prev"
        },
    });

    var pagingSwiper = new Swiper(".pg_frac", {
        pagination: {
            el: ".pg02",
            type: "fraction",
        },
    });
    
    
    //법인메인 음악리스트
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var list = document.getElementsByClassName("music_list");
        slideIndex++;
        if (slideIndex > list.length) {
            slideIndex = 1
        }
        for (i = 0; i < list.length; i++) {
            list[i].className = list[i].className.replace(" active", "");
        }
        list[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000);
    }
    
    


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
            $('.ev_main_con04 .count_wrap .cnt_arrow img').attr('src', 'images/ev_main_m_con04_cnt_arrow_v2.png');
        } else {
            $('#header .logo img').attr('src', 'images/logo.png');
            $('.ev_main_con01 ul li.link01 a img').attr('src', 'images/ev_main_con01_icon01.png');
            $('.ev_main_con01 ul li.link02 a img').attr('src', 'images/ev_main_con01_icon02.png');
            $('.ev_main_con06 .con06_img01 img').attr('src', 'images/ev_main_con06_img.png');
            $('.ev_main_con04 .count_wrap .cnt_arrow img').attr('src', 'images/ev_main_con04_cnt_arrow_v2.png');
        }
    }).resize();




});
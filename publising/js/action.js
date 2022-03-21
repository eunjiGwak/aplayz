$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // 슬라이드를 버튼으로 움직일 수 있습니다.
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 현재 페이지를 나타내는 점이 생깁니다. 클릭하면 이동합니다.
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // 현재 페이지를 나타내는 스크롤이 생깁니다. 클릭하면 이동합니다.
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        // 3초마다 자동으로 슬라이드가 넘어갑니다. 1초 = 1000
        autoplay: {
            delay: 3000,
        },
    });
});









//$(document).ready(function(){
//    var swiper = new Swiper(".reel_wrap", {
//        loop: true,
//        parallax: true,
//        slidesPerView: "auto",
//        spaceBetween: 30,
//        speed: 1000,
//        //centeredSlides: true,
//        scrollbar: {
//            el: ".pj_scrollbar",
//            hide: true,
//        },
//        navigation: {
//            nextEl: ".pj_next",
//            //prevEl: ".pj_prev",
//        },
//    });
//    
//    var swiper = new Swiper(".about_slide", {
//        loop: true,
//        slidesPerView: 2,
//        spaceBetween: 30,
//        speed: 1000,
//        pagination: {
//          el: ".about_pg",
//          type: "fraction",
//        },
//    });
//    
//    $(".accordion_wrap .que").click(function () {
//        $(this).next(".anw").stop().slideToggle(300);
//        $(this).toggleClass('on').siblings().removeClass('on');
//        $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
//    });
//    
//});

//Zepto(function ($) {
//    $(window).on('load', function () {
//        $.each($(".text_roller"), function (index, item) {
//            const wrapper = $("<div />", {
//                class: "text_roller_wrapper"
//            });
//            const roller = $(item);
//            roller.append(wrapper);
//            const span = roller.find('span').first();
//            wrapper.append(span);
//
//            const span_width = span.get(0).offsetWidth;
//            const max_width = roller.width() + span_width;
//            let inner_width = span_width;
//
//            while (max_width > inner_width) {
//                wrapper.append(span.clone());
//                inner_width += span_width;
//            }
//
//            anime({
//                targets: wrapper.get(0),
//                translateX: {
//                    value: '-=' + span_width + 'px',
//                    duration: 13000
//                },
//                loop: true,
//                easing: 'linear'
//            });
//        });
//    })
//});
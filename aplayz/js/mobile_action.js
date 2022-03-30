$(document).ready(function () {
    
    //모바일 인트로
//    $('.intro').slick({
//        dots: true,
//        infinite: true,
//        prevArrow: false,
//        nextArrow: false,
//        speed: 300,
//        slidesToShow: 1,
//        autoplay: true,
//        autoplaySpeed: 2000,
//    });
    
    $('.tutorial_box').slick({
        dots: true,
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        slidesToShow: 1,
    });
    
    $("#tutorial_pop .close").on('click', function(){
        $("#mask").fadeOut(150);
        $("#tutorial_pop").fadeOut(150);
    })
    
});

    
$(document).ready(function(){

    $(window).scroll(function() {

        var scrol = $(window).scrollTop();

            if (scrol >= 1) {
                $(".header").addClass("active");
               
            } else {
                $(".header").removeClass("active");
            };

    });

    /*toggle_menu*/
    $(".toggle").click(function(){
        $(".toggle_menu").addClass('active');
        $(".swiper-pagination").hide();
        $(".swiper-button-next").hide();
        $(".swiper-button-prev").hide();
    });
    $("#toggle_back").click(function(){
        $(".toggle_menu").removeClass('active');
        $(".swiper-pagination").show();
        $(".swiper-button-next").show();
        $(".swiper-button-prev").show();
    });
    $(".toggle_close > svg").click(function(){
        $(".toggle_menu").removeClass('active');
        $(".swiper-pagination").show();
        $(".swiper-button-next").show();
        $(".swiper-button-prev").show();
    });

    /*modal_close_btn*/
    $(".modal_close_btn").click(function(){
        $(".modal").hide();
    });
    $(".modal_box").find('button').click(function(){
        $(".modal").hide();
    });

    $(".mo_header_box svg").click(function(){
        $(".modal").hide();
    });

    /*alert*/
    $(".alert_box").find('button').click(function(){
        $(".alert").hide();
    });




    /*like_modal*/
    $(".like_modal").hide();
    $("#like").click(function(){
        $(".like_modal").fadeIn(300);
    });
    $(".like_modal").click(function(){
        $(".like_modal").fadeOut(300);
    });

      /*hate_modal*/
      $(".hate_modal").hide();
      $("#hate").click(function(){
          $(".hate_modal").fadeIn(300);
      });
      $(".hate_modal").click(function(){
          $(".hate_modal").fadeOut(300);
      });

    /*brand_modal*/
    $(".brand_modal").hide();
    $(".brand_type").click(function(){
        $(".brand_modal").show();
    });
    $(".brand_box_1440").click(function(){
        $(".brand_modal").show();
    });
   
 
    
    /*login*/
    $("#login_check").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });

    $("#login_check1").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });

    /*join*/
    $(".agree_box").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });
    $(".agree_txt > ul").click(function(){
        var $check = $(this);
        $check.find("img").attr("src", function(index, attr){
            if(attr.match('_of')){
                return attr.replace("_of.png", "_on.png");
            }else {
                return attr.replace("_on.png", "_of.png");
            }
        });
    });

    /*agree_modal*/
    $(".agree_modal").hide();
    $(".agree_txt > ul").children('li:nth-child(2)').click(function(){
        $(".agree_modal").show();
    });
    $("#payment_agree_check").click(function(){
        $(".agree_modal").show();
    });



    /*find_pw*/ 
    $(".email_certifi_modal").hide();
    $(".email_input_btn").click(function(){
        $(this).text('재요청');
        $(".email_certifi_modal").show();
    });
    $(".alert_close_btn").click(function(){
        $(".email_certifi_modal").hide();
    });

    /*product*/
    $("#payment_btn_shop").mouseover(function(){
        $(".shop_regi > p").fadeOut();
    });
    $("#payment_btn_shop").mouseleave(function(){
        $(".shop_regi > p").fadeIn();
    });


    /*coupon_upload_modal*/
    $(".coupon_upload_modal").hide();
    $(".upload_finished_modal").hide();
    $(".coupon_btn").click(function(){
        $(".coupon_upload_modal").show();
    });
    $(".modal_close_btn").click(function(){
        $(".coupon_upload_modal").hide();
    });
    $(".coupon_upload_modal").find('button:nth-child(1)').click(function(){
        $(".coupon_upload_modal").hide();
    });
    $(".coupon_upload_modal").find('button:nth-child(2)').click(function(){
        $(".coupon_upload_modal").hide();
        $(".upload_finished_modal").show();
    });



    /*profile_get_out*/
     $(".check_box").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.svg", "_active.svg");
            }else {
                return attr.replace("_active.svg", "_off.svg");
            }
        });
    });


    /*policy*/
    $(".policy .one_depth > a").click(function(){
        var tab_active = $(this).attr('data-tab');

        $(".policy .one_depth > a").removeClass('on');
        $(".policy .one_depth > a > span").removeClass('on');
        $(".policy .cs_content > div").removeClass('on');

        $(this).addClass('on');
        $(this).children('span').addClass('on');
        $("#"+tab_active).addClass('on');
                  
    });
   

    /*payment_modal*/
    $(".payment_modal").hide();
    $(".payment_table p").click(function(){
        $(".payment_modal").show();
    });
    $(".payment_title p").click(function(){
        $(".payment_modal").show();
    })
    $(".payment_modal_title > svg").click(function(){
        $(".payment_modal").hide();
    });

    /*payment_paging*/
    $(".payment_paging > span").click(function(){
        $(".payment_paging > span").removeClass('on');
        $(this).addClass('on');
    });


    /*card_upload_popup*/
    $(".card_popup1").hide();
    $(".card_popup2").hide();

    $("#card_change").click(function(){
        $(".card_popup1").show();
    });
    $(".card_popup_btn > p:first-child").click(function(){
        $(".card_popup1").hide();
    });
    $(".card_popup_btn > p:last-child").click(function(){
        $(".card_popup1").hide();
        $(".card_popup2").show();
    });
    
    $(".card_popup2").find("#color_txt").click(function(){
        $(".card_popup2").hide();
    });

    /*space_check */
    $(".select-box-dropDown > ul > li").mouseover(function(){
        $(this).find('img').attr("src", "img/space_check_active.png");
    });
    $(".select-box-dropDown > ul > li").mouseleave(function(){
        $(this).find('img').attr("src", "img/space_check_none.png");
    });
    
    $(".space_down_box1 > ul > li").mouseover(function(){
        $(this).find('img').attr("src", "img/space_check_active.png");
    });
    $(".space_down_box1 > ul > li").mouseleave(function(){
        $(this).find('img').attr("src", "img/space_check_none.png");
    });

    $(".space_down_box2 > ul > li").mouseover(function(){
        $(this).find('img').attr("src", "img/space_check_active.png");
    });
    $(".space_down_box2 > ul > li").mouseleave(function(){
        $(this).find('img').attr("src", "img/space_check_none.png");
    });




    /*space_time_modal*/
    $(".open_time").hide();
    $(".close_time").hide();

    $(".start_clock").click(function(){
        $(".open_time").show();
    });
    $(".end_clock").click(function(){
        $(".close_time").show();
    });
   
    /*favorit_music_choice click_event*/
    //$(".favorit_music_choice > ul").click(function(){
    //    var click_e = $(this).find('.click_event');

    //    click_e.toggle(function(){
    //        click_e.css('opacity', '0');
    //    }, function(){
    //        click_e.css('opacity', '1');
    //    });
    //    return false;
    //});
    
    /*myspace_modal*/
    $(".space_1depth").hide();
    $(".space_2depth").hide();
    $(".subscribe_1depth").hide();
    $(".subscribe_2depth").hide();

    $("#delet_space").click(function(){
        $(".space_1depth").show();
    });
    $("#sp_1depth_btn").children('li:eq(0)').click(function(){
        $(".space_1depth").hide();
    });
    $("#sp_1depth_btn").children('li:eq(1)').click(function(){
        $(".space_1depth").hide();
        $(".space_2depth").show();
    });
    $("#sp_2depth_btn").children('li').click(function(){
        $(".space_2depth").hide();
    });


    $("#delet_subscribe").click(function(){
        $(".subscribe_1depth").show();
    });
    $("#sub_1depth_btn").children('li:eq(0)').click(function(){
        $(".subscribe_1depth").hide();
    });
    $("#sub_1depth_btn").children('li:eq(1)').click(function(){
        $(".subscribe_1depth").hide();
        $(".subscribe_2depth").show();
    });
    $("#sub_2depth_btn").children('li').click(function(){
        $(".subscribe_2depth").hide();
    });


    
    /*myspace_0_1*/
    $(".space_change_alert").hide();
    $(".card_ui ul").not('ul.alrnehr').find('img').click(function(){
        $(".space_change_alert").show();
    });
    $(".card_popup_btn > p").click(function(){
        $(".space_change_alert").hide();
    });

    $(".space_change1_alert").hide();
    $(".card_ui ul.alrnehr").find('img').click(function(){
        $(".space_change1_alert").show();
    });
    $(".card_popup_btn > p").click(function(){
        $(".space_change1_alert").hide();
    });

    $(".setting_show_box").hide();
    $(".setting_area").find('#setting_icon').click(function(){
        $(this).siblings('.setting_show_box').fadeToggle();
    });
    $(".setting_show_box p").click(function(){
        $(".setting_show_box").hide();
    });


    $(".setting_area").find('#setting_icon').click(function(){
    $('.setting_show_box1').css({"bottom":"0", "transition":"all 0.5s"});
    });
    $(".setting_show_box1 p").click(function(){
        $(".setting_show_box1").css({"bottom":"-100%", "transition":"all 1s"});
    });
    $(".setting_title img").click(function(){
        $(".setting_show_box1").css({"bottom":"-100%", "transition":"all 1s"});
    });


     /*myspace_4_3*/
     $(window).scroll(function(){
         var scrollT = $(window).scrollTop();

         if(scrollT > 1) {
            $(".notice_txt").addClass('active');
         }
     });



    /*myspace5*/
    //$(".brand_setting_modal").hide();

    $(".brand_setting .span_box").click(function(){
        $(".back_dim").show();
        $(".brand_setting_modal").css({"bottom":"0", "transition":"all 0.5s"});
    });
    $(".brand_setting_modal div").children('p').click(function(){
        $(".back_dim").hide();
        $(".brand_setting_modal").css({"bottom":"-100%", "transition":"all 1s"});
    });

    $(".span_box").siblings('div').hide();
    $(".span_box").click(function(){
        $(this).siblings('div').fadeToggle();

    });


    $(".connection_alert").hide();
    $("#connection").click(function(){
        $(".connection_alert").show();
    });
    $(".connection_btn p").click(function(){
        $(".connection_alert").hide();
    });

    $(".connection_alert1").hide();
    $(".span_box").siblings('div').children('p:eq(0)').click(function(){
        $(".span_box").siblings('div').hide();
        $(".connection_alert1").show();
    });
    $(".connection_btn1 p").click(function(){
        $(".connection_alert1").hide();
    });

    $(".connection_alert2").hide();
    $(".span_box").siblings('div').children('p:eq(1)').click(function(){
        $(".span_box").siblings('div').hide();
        $(".connection_alert2").show();
    });
    $(".connection_btn2 p").click(function(){
        $(".connection_alert2").hide();
    });


    $(".tooltip").hide();
    $(".mo_header_box h2 svg").click(function(){
        $(".tooltip").fadeIn(300);
    });
    $(document).mouseup(function(){
        $(".tooltip").fadeOut(300);
    });
    

    /*myspace_6*/
    $(".choice_date span").click(function(){
        $(this).toggleClass('on');
    });
 
  
    /*cs_list_slidetoggle*/
    $(".sub_cs_list").hide();

    $(".cs_list > li:first-child").click(function(){
        $(this).siblings().slideToggle(300);
        $(this).children('svg').toggleClass('rotate');
    });

    $(".two_depth > a").click(function(){
        $(".two_depth > a").removeClass('on');
        $(this).addClass('on');
    });
    

    /*문의하기 팝업*/ 
    $(".inquiry_popup").hide();
    $(".open_popup").click(function(){
        $(".inquiry_popup").show();
    });
    $("#close_btn").click(function(){
        $(".inquiry_popup").hide();
    });
    $(".popup_out").click(function(){
        $(".inquiry_popup").hide();
    });


    /*비밀번호 변경 팝업*/
    $(".profile_popup").hide();
    $("#pw_change_btn").click(function(){
        $(".profile_modal").show();
        $(".profile_popup").show();
    });

    $("#pw_change_btn1").click(function(){
        $(".profile_modal").show();
        $(".profile_popup").show();
    });

    $("#pw_change_ok").click(function(){
        $(".profile_popup").hide();
    });

    /*회원탈퇴 팝업*/
    $(".get_out_popup").hide();
    $("#get_out_btn").click(function(){
        $(".profile_getout_modal").show();
        $(".get_out_popup").show();
    });
    $(".get_out_btn p").click(function(){
        $(".get_out_popup").hide();
    });

   
    /*push_alarm_setting*/
    $(".alarm_box").click(function(){
        $(this).children('span:eq(0)').toggleClass('active1');
        $(this).children('span:eq(1)').toggleClass('active1_1');

    });

    /*store_search*/
    $(".store_search_modal").hide();
    $("#store_search").click(function(){
        $(".store_search_modal").show();
    });
    $("#store_search1").click(function(){
        $(".store_search_modal").show();
    });
    $(".search_input > svg").click(function(){
        $(".store_txt").css('display', 'block');
    });
    $(".st_search_title > svg").click(function(){
        $(".store_search_modal").hide();
    });


    /*space_1*/
    $(".space_upload").hide();
    $("#space_upload_ing_btn").click(function(){
        $(".space_upload").show();
    });
    $("#space_upload_ing_btn1").click(function(){
        $(".space_upload").show();
    });


    /*space_3*/
    $(".acodian_tab > li").click(function(){
        $(".acodian_tab > li").children('div').removeClass('on');
        $(this).children('div').toggleClass('on');
    });


    /*space_4_1*/
    $(".bubble").click(function(){
        $(this).toggleClass('active');
        $(this).children('div').toggle();
        $(this).children('p').toggleClass('active');
    
    });
    $(".types ul li").children('span').hide();
    $(".types ul li").click(function(){
        $(this).children('span').toggle();
    });

        
    /*space_4_2*/  
    $(".music_century > div").mouseover(function(){
        $(this).css({
            "transform":"scale(1.1)",
            "background":"rgba(255, 255, 255, 0.16)"
        });
    });
    $(".music_century > div").mouseleave(function(){
        $(this).css({
            "transform":"scale(1)",
            "background":"rgba(255, 255, 255, 0.08)"
        });
    });

    $(".music_century > div").click(function(){
        $(this).toggleClass('active');
        $(this).children(".hidden_m_c").hide();

        if($(this).hasClass('active')) {
            $(this).mouseover(function(){
                $(this).css( "transform", "scale(1)");
                $(this).children(".hidden_m_c").hide();
            });
        }else {
            $(".music_century > div").mouseover(function(){
                $(this).css( "transform", "scale(1.1)");
                $(this).children(".hidden_m_c").show();
            });
        }
    });


    $(".century ul li").children('div').hide();
    $(".century ul li").click(function(){
        $(this).children('div').toggle();
    });

    $(".up_span > svg").click(function(){
        $(".up_span").removeClass('on');
    });

    $(".century ul li:nth-child(1)").click(function(){
        $(".up_span").removeClass('on');
        $(".80year_ago").addClass('on');
    });
    /*$(".century ul li:nth-child(2)").click(function(){
        $(".up_span").removeClass('on');
        $(".80year").addClass('on');
    });*/
    $(".century ul li:nth-child(2)").click(function(){
        $(".up_span").removeClass('on');
        $(".90year").addClass('on');
    });
    $(".century ul li:nth-child(3)").click(function(){
        $(".up_span").removeClass('on');
        $(".00year").addClass('on');
    });
    $(".century ul li:nth-child(4)").click(function(){
        $(".up_span").removeClass('on');
        $(".10year").addClass('on');
    });
    $(".century ul li:nth-child(5)").click(function(){
        $(".up_span").removeClass('on');
        $(".20year").addClass('on');
    });





     /*space_4_3*/

     $(".rythm").hide();

     $(".hover_event > img").click(function(){
        
         $('.hover_event').removeClass('on');
         $(".hover_event > .rythm").hide();
         $(".hover_event > .rythm").siblings('img').show();

         $(this).hide();
         $(this).next('.rythm').show();
         $(this).parent('.hover_event').addClass('on');

     });
 
     $(".hover_event > .rythm").click(function(){
         $(this).hide();
         $(this).siblings('img').show();
         $(this).parent('.hover_event').removeClass('on');

         $(".hover_event").siblings('.click_event').hide('active');
         $(".hover_event").siblings('.click_event > svg').hide('active');
     });
     

    $(".hover_event").click(function(e) { 
        if(!$(e.target).hasClass("click_event_check", "rythm")) {
            $(this).siblings('.click_event').show().toggleClass('active');
            $(this).siblings('.click_event > svg').show().addClass('active');
        }
    });

   

    /*qration_ing*/
    $(".qration_ing").hide();
    $(".form_bottom_box").find('svg').click(function(){
        $(".qration_ing").show();
    });
    $(".types_bottom > svg").click(function(){
        $(".qration_ing").show();
    });




    /*space_4_graph_pc */
    $(".span_box").children('span:eq(0)').click(function(){
        $("#progress").css('width', '0');
    });
    $(".span_box").children('span:eq(1)').click(function(){
        $("#progress").css('width', '20%');
    });
    $(".span_box").children('span:eq(2)').click(function(){
        $("#progress").css('width', '30%');
    });
    $(".span_box").children('span:eq(3)').click(function(){
        $("#progress").css('width', '40%');
    });
    $(".span_box").children('span:eq(4)').click(function(){
        $("#progress").css('width', '50%');
    });
    $(".span_box").children('span:eq(5)').click(function(){
        $("#progress").css('width', '60%');
    });
    $(".span_box").children('span:eq(6)').click(function(){
        $("#progress").css('width', '70%');
    });
    $(".span_box").children('span:eq(7)').click(function(){
        $("#progress").css('width', '80%');
    });
    $(".span_box").children('span:eq(8)').click(function(){
        $("#progress").css('width', '90%');
    });
    $(".span_box").children('span:eq(9)').click(function(){
        $("#progress").css('width', '100%');
    });

    /*space_4_graph_m*/
    $(".span_box2").children('span:eq(0)').click(function(){
        $("#progress2").css('width', '20%');
    });
    $(".span_box2").children('span:eq(1)').click(function(){
        $("#progress2").css('width', '30%');
    });
    $(".span_box2").children('span:eq(2)').click(function(){
        $("#progress2").css('width', '40%');
    });
    $(".span_box2").children('span:eq(3)').click(function(){
        $("#progress2").css('width', '50%');
    });
    $(".span_box2").children('span:eq(4)').click(function(){
        $("#progress2").css('width', '60%');
    });
    $(".span_box2").children('span:eq(5)').click(function(){
        $("#progress2").css('width', '70%');
    });
    $(".span_box2").children('span:eq(6)').click(function(){
        $("#progress2").css('width', '80%');
    });
    $(".span_box2").children('span:eq(7)').click(function(){
        $("#progress2").css('width', '100%');
    });

   

    /*space_5*/
    $(".upload_card").hide();
    $("#none_upload_card").click(function(){
        $(".upload_card").show();
    });
    $(".upload_card_box > button").click(function(){
        $(".upload_card").hide();
    });

    

    $("#pay_check").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.png", "_active.png");
            }else {
                return attr.replace("_active.png", "_off.png");
            }
        });
    });

    $("#pay_check1").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.svg", "_active.svg");
            }else {
                return attr.replace("_active.svg", "_off.svg");
            }
        });

        $(".payment_box > div:nth-child(4)").find('img').attr("src", function(index, attr){
            if(attr.match('_of')){
                return attr.replace("_of.png", "_on.png");
            }else {
                return attr.replace("_on.png", "_of.png");
            }
        });
    });
    $("#pay_check2").click(function(){
        var $this = $(this);
        $this.find(">img").attr("src", function(index, attr){
            if(attr.match('_off')){
                return attr.replace("_off.svg", "_active.svg");
            }else {
                return attr.replace("_active.svg", "_off.svg");
            }
        });

        $(".payment_box > div:nth-child(4)").find('img').attr("src", function(index, attr){
            if(attr.match('_of')){
                return attr.replace("_of.png", "_on.png");
            }else {
                return attr.replace("_on.png", "_of.png");
            }
        });
    });

  


    /*select_box_custom*/
    $(".select-box").click(function() {

        var select = $(this);
        
        //드롭다운 열기
        select.next('.select-box-dropDown').slideDown(300);
        select.next('.select-box-dropDown').css('box-shadow', '0 0 0 1px #FF2D55');
        select.css('box-shadow', '0 0 0 1px #FF2D55');
        select.addClass('active');
        
        //다른영역 클릭 시 닫기
        $(document).mouseup(function(e) {
          var seting = $(".select-box-dropDown");
          
          if (seting.has(e.target).length === 0) {
            seting.slideUp(300);
          }
          seting.css('box-shadow', 'none');
          select.css('box-shadow', 'none');
          select.removeClass('active');
        });

      
        select.next(".select-box-dropDown").find('li').click(function() {
          var option = $(this).text();
          
          //클릭 시 드롭다운 닫기
          $(".select-box-dropDown").slideUp(300);
          select.css('box-shadow', 'none');
          select.removeClass('active');
          //select에  text 넣기
          select.text(option);
        });
    });


    $(".drop_box1").hide();
    $(".player_clock_1").find('.select-box').click(function(){
        $(".drop_box1").slideToggle();
       
    });

    //$(".space_down_box1").hide();
    $(".back_dim").hide();
    $(".select_box_big").click(function(){
        $(".space_down_box1").css({"bottom":"0", "transition":"all 0.5s"});
        $(".back_dim").show();
    });
    $(".space_down_box1").find('li').click(function(){
        $(".space_down_box1").css({"bottom":"-100%", "transition":"all 1s"});
        $(".back_dim").hide();
    });
    $(".space_down_box1").find('svg').click(function(){
        $(".space_down_box1").css({"bottom":"-100%", "transition":"all 1s"});
        $(".back_dim").hide();
    });

    //$(".space_down_box2").hide();
    
    $(".select_box_small").click(function(){
        $(".space_down_box2").css({"bottom":"0", "transition":"all 0.5s"});
        $(".back_dim").show();
    });
    $(".space_down_box2").find('li').click(function(){
        $(".space_down_box2").css({"bottom":"-100%", "transition":"all 1s"});
        $(".back_dim").hide();
    });
    $(".space_down_box2").find('svg').click(function(){
        $(".space_down_box2").css({"bottom":"-100%", "transition":"all 1s"});
        $(".back_dim").hide();
    });


});
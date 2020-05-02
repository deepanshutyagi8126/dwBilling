$(document).ready(function(){
  $(".mile_img").click(function(){
    $(".year_descp").toggle();
  });
    $(".circlee1").click(function(){
    $(".circlee1").addClass("poss");
    $(".circlee1").addClass("actt_img"); 
    $("h3.year_fftn").addClass("head_bold"); 

 
  });
    $(".crcle2").click(function(){
   	$(".crcle2").addClass("poss"); 
    $(".crcle2").addClass("actt_img"); 
    $("h3.year_svn").addClass("head_bold"); 


   });
    $(".crcle3").click(function(){
   	$(".crcle3").addClass("poss"); 
    $(".crcle3").addClass("actt_img");
    $("h3.year_eght").addClass("head_bold"); 


   });
     $(".crcle4").click(function(){
   	$(".crcle4").addClass("poss");
    $(".crcle4").addClass("actt_img"); 
    $("h3.year_nine").addClass("head_bold"); 

 
   });
    $(".last_crcl").click(function(){
    $(".last_crcl").addClass("actt_img"); 
    $("h3.year_twnty").addClass("head_bold"); 

 
   });
      $("#individual_tab").click(function(){
    $(".individual").addClass("actv_btnn");
    $(".venture").removeClass("actv_btnn");  
   });
    $("#venture_tab").click(function(){
    $(".venture").addClass("actv_btnn"); 

   });
 });
       

$(document).ready(function(){
$("#seventeen").click(function(){
   $(".year_descp").addClass("shift_div");

});
$("#eighteen").click(function(){
   $(".year_descp").addClass("shift_divv");  
});
$("#nineteen").click(function(){
   $(".year_descp").addClass("nineteen_div");  
});
$("#twenty").click(function(){
   $(".year_descp").addClass("twnty_div");  
});
$("#venture_tab").click(function(){
    $("#individuals").hide();
	$(".ventt").addClass("vent_showw");
  });
$("#individual_tab").click(function(){
	$(".ventt").removeClass("vent_showw");
});
$("#individual_tab").click(function(){
	$("#individuals").show();
});
});

('#individuals').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 415,
            settings: {
                dots: true,
                slidesToShow: 1,
                centerMode: true,
            centerPadding: '40px',

            }
        }
    ]
});
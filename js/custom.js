

$(document).ready(function(){
$(document).on('click' ,'.headerBox ul li a' , function(){
  $('.headerBox ul li a').removeClass('add_active');
    $(this).addClass('add_active');
});       
});
$(document).ready(function(){
$(document).on('click' ,'.socIcon  a' , function(){
  $('.socIcon a').removeClass('add_active');
    $(this).addClass('add_active');
});       
});

// Fixed Header Start
$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

// Fixed Header End

// Sidebar Start

$('.navbar-toggler').click(function() {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});

// Sidebar End

// Navbar Button Style Start

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});

// Navbar Button Style End


$(document).ready(function(){
$(document).on('click' ,'.headProfile a' ,function(){
    $('.profLogs').show();
});    
});

document.addEventListener("mousedown",function(event){
    if(event.target.closest(".headProfile a , .profLogs"))
       return;
    $('.profLogs').hide();
});


 $(document).ready(function(){
  $(".dotShow a").click(function(){
    $(".dotBtn").hide();
    $(this).siblings('.dotBtn').toggle();
  });
});

document.addEventListener("mousedown",function(event){
    if(event.target.closest(".dotShow a, .dotBtn"))
       return;
    $('.dotBtn').slideUp();
});

// tab start
$(document).ready(function () {
    $('.payDtl').hide();
    $('.payDtl1').show();
    $('.clicktab').click(function () {
        var type = $(this).data('type');
        $('.payDtl').hide();
        $('.payDtl' + type).fadeIn();
        $('.clicktab').removeClass('colActive');
        $(this).addClass('colActive');
    });
});
// tab end

$(document).ready(function(){
$(document).on('click' ,'.searchAll a' ,function(){
    $('.searchBox').show();
});    
});
document.addEventListener("mousedown",function(event){
    if(event.target.closest(".searchAll a, .searchBox"))
       return;
    $('.searchBox').hide();
});

$(document).ready(function(){
$(document).on('click' ,'.filterAll a' ,function(){
    $('.fillterInner').show();
});    
});
document.addEventListener("mousedown",function(event){
    if(event.target.closest(".filterAll a, .fillterInner"))
       return;
    $('.fillterInner').hide();
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});



/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = $(input).parent("div").siblings('.avatar-preview').children('div');
//            alert((img).attr("id"))
            $(img).css('background-image', 'url('+e.target.result +')');
            $(img).hide();
            $(img).fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(document).on('change', "#imageUpload2, #imageUpload, #imageUpload3 ,#imageUpload4 ,#imageUpload5 ,#imageUpload6 ,#imageUpload8", function() {
    readURL(this);
});


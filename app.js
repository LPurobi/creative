var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.navbar-default').css({"background":"white"});
    } else {
       $('.navbar-default').css({"background":"transparent"});
    }
});
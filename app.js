var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.navbar-default').css({"background":"white"});
       $('.navbar-default .navbar-nav>li>a').css({"color:black"})
    } else {
       $('.navbar-default').css({"background":"transparent"});
    }
});
$(document).ready(function(){
    $(".navbar-icon").click(function(){
        $(".navbar-icon").toggleClass("navbar-icon-click");
        $(".line1").toggleClass("line1-click");
        $(".line2").toggleClass("line2-click");
        $(".line3").toggleClass("line3-click");
    });
    $(".qa-a").click(function(){
        $(this).parent().toggleClass("qa-click"),
        $(this).parent().parent().siblings().find(".card-header").removeClass("qa-click");





    });





    



});

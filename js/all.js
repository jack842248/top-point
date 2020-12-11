$(document).ready(function(){
    //----------------漢堡選單效果----------------//
    $(".navbar-icon").click(function(e){
        e.stopPropagation();
        $(".navbar-icon").toggleClass("navbar-icon-click"),
        $(".line1").toggleClass("line1-click"),
        $(".line2").toggleClass("line2-click"),
        $(".line3").toggleClass("line3-click"),
        $("#menu").slideToggle();
        if($("#menu").is(":visible")){
            $(document).one("click",function(){
                $("#menu").slideUp();
            });

        }
    });
    //----------------漢堡選單效果----------------//
    $(window).scroll(function(){
        if($(window).scrollTop()>0)
            $("#navbar").



    });




    //----------------Q&A點擊套用效果----------------//
    $(".qa-a").click(function(){
        $(this).parent().toggleClass("qa-click"),
        $(this).parent().parent().siblings().find(".card-header").removeClass("qa-click");





    });





    



});

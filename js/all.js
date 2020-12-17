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


    //----------------navbar離開頂部效果----------------//
    $(window).scroll(function(){
        if($(window).scrollTop()>0)
            $("#navbar").parent().addClass("navbar-transparent"),
            $("#scrolldown").addClass("scrolldown-transparent");
        else
            $("#navbar").parent().removeClass("navbar-transparent"),
            $("#scrolldown").removeClass("scrolldown-transparent");
    });


    //----------------uptopc回到頂部----------------//
    $("#uptop").on('click',function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:0,
        },1000);
    });


    // //----------------Q&A點擊套用效果----------------//
    // $(".qa-a").click(function(){
    //     $(this).parent().toggleClass("qa-click"),
    //     $(this).parent().parent().siblings().find(".card-header").removeClass("qa-click");
    // });



    //----------------vue.js----------------//
    window.onload = function () {

        var qabox = {
            qas:[
                {question:'我們可以摸貓咪、拍照跟他們玩嗎?',answer:'可以!但因為貓咪個性容易緊張，所以請勿驚擾睡夢中的貓咪。可以輕撫貓咪與他們合照，但請勿使用閃光燈拍照、強行抱起他們或餵食。請避免讓小朋友在店內奔跑喧嘩或是單獨與貓咪相處，以免貓咪攻擊小朋友。'},
                {question:'可以帶自己的毛小孩進來嗎?',answer:'可以喔!以不影響他人為主，而且結紮及施打過預防針的毛孩子會比較好喔!毛孩子到陌生的地方環境都會比較緊張不適應，建議您要帶提籠或牽繩!為維護現場品質，寵物隻數不可超過人數。'},
                {question:'請問我們可以帶外食嗎?',answer:'店內禁止飲用外食喔!但可以帶蛋糕來慶生喔!'},
                {question:'消費方式?',answer:'輕食、午餐、晚餐、個人套餐、只收現金。'},
                {question:'請問你們可以訂位嗎?',answer:'目前只接受電話訂位!'},
                {question:'請問你們有限制用餐時間?',answer:'平日沒有限時，但週六及例假日限時兩小時!'},
                {question:'座位最多可以容納多少人呢?',answer:'維護現場用餐品質，我們最多接受10位的訂位喔!'},
                {question:'星期天有營業嗎?',answer:'沒有喔!我們週日固定店休。下午沒有休息全日供餐!不定時店休會於FB粉絲專頁工公告。'},
                {question:'為什麼晚上八點之後不能點餐點了?',answer:'平日營業時間為:11:30至19:00，最後出餐時間為18:30。周六營業時間為11:30至21:00，最後出餐時間為19:50。以上若餐點提早售完則不再此限。每日的下午茶時段為13:00至17:00。'},
                {question:'有汽車停車場嗎?',answer:'我們沒有特約停車場!鄰近停車場敬請參考店門口告示牌，建議您就近至合作金庫斜對面的收費停車場，步行約3分鐘!'},
                {question:'請問有提供素食的餐點嗎?',answer:'有的，但只有素食義大利麵(或燉飯)和瑪格莉特披薩，烹煮時可以不要加。'},
                {question:'請問可以玩牌嗎?',answer:'抱歉，塔羅牌占卜是OK的，但咖啡喵是禁止桌上遊戲的!'}
            ]
        }
        var vm = new Vue({
            el: "#accordion",
            data: qabox
        });

    }




    





    



});
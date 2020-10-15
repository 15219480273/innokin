$(document).ready(function() {	
    // Design list switching
    $('.design-title a').click(function() {
        var i = $('.design-title a').index(this);
        $('.design-title a').removeClass('design-title-active');
        $('.design-title a').eq(i).addClass('design-title-active');
        $('.list-of-designs').css('display','none');
        $('.list-of-designs').eq(i).css('display','block');
    });
    // Button under banner
    $('.banner-btn a').click(function(){
        var i = $('.banner a').index(this);
        $(".banner-btn a").removeClass('banner-ico-active');
        $(".banner-btn a").eq(i).addClass('banner-ico-active');
        if(i===0){
            $("html,body").animate({scrollTop:$("#get").offset().top},600);
        }else if(i===1){
            $("html,body").animate({scrollTop:$("#view").offset().top},600);
        }
    })

});
$(document).ready(function(){
    ctr = 0;
    window.setInterval(function(){
        ctr = (ctr + 1)%3;
        $(".intro-header-bg").fadeOut(function(){
            $(this).removeClass("bg0 bg1 bg2").addClass("bg"+ctr).fadeIn('fast');
        });
    },5000);
});
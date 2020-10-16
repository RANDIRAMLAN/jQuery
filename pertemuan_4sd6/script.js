$(document).ready(function () {
    // efek hide
    $('#hide').click(function () {
        $('#kotak').hide(1000);
    });
    // efek show
    $('#show').click(function () {
        $('#kotak').show(1000);
    });
    // efek fade out
    $('#fadeout').click(function () {
        $('.box1').fadeOut(1000);
        $('.box2').fadeOut(2000);
        $('.box3').fadeOut(3000);
    });
    // fade in
    $('#fadein').click(function () {
        $('.box1').fadeIn(3000);
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(1000);
    });
    // fadetoggle
    $('#fadetoggle').click(function () {
        $('.box1').fadeToggle(1000);
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(3000);
    });
    // fadeto
    $('#fadeto').click(function () {
        $('.box1').fadeTo("slow", 0.2);
        $('.box2').fadeTo("slow", 0.3);
        $('.box3').fadeTo("slow", 0.1);
    });

    // efek slideup
    $('#slideup').click(function () {
        $('#slide').slideUp("slow");
    });
    // efel sidedown
    $('#slidedown').click(function () {
        $('#slide').slideDown();
    });
    // efek slide toggle
    $('#slidetoggle').click(function () {
        $('#slide').slideToggle();
    });
    // efek animate
    $('#kiri').click(function () {
        $('#animebox').animate({ 'left': "-=50px" }, "slow");
    });
    $('#kanan').click(function () {
        $('#animebox').animate({ 'right': "-=50px" }, "slow");
    });
    // efek clearquane
    $('#start').click(function () {
        $('#clearquane').animate({ left: '+=500' }, 5000);
        $('#clearquane').queue(function () {
        });
    });
    $('#stop').click(function () {
        $('#clearquane').clearQueue();
        $('#clearquane').stop();
    });
    // efekdelay
    $('#delay').click(function () {
        $('#kotak1').slideUp(2000).delay(3000).fadeIn(2000);
        $('#kotak2').slideUp(2000).fadeIn(2000);
    });

});
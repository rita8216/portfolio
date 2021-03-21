
$(function() {


    $('#searchBigContent').hide();
    $('.searchBig').click(function() {
        $('#searchBigContent').slideToggle(500);
    });

    $('.groupTitle').click(function() {
        $(this).next().slideToggle(500);
    });
    $('.topPic img').hide();

    function p1() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic1').fadeIn(3000).fadeOut(9000);
        setTimeout(p2, 7000);
    }

    function p2() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic2').fadeIn(3000).fadeOut(9000);
        setTimeout(p3, 7000);
    }

    function p3() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic3').fadeIn(3000).fadeOut(9000);
        setTimeout(p4, 7000);
    }

    function p4() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic4').fadeIn(3000).fadeOut(9000);
        setTimeout(p5, 7000);
    }

    function p5() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic5').fadeIn(3000).fadeOut(9000);
        setTimeout(p6, 7000);
    }

    function p6() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic6').fadeIn(3000).fadeOut(9000);
        setTimeout(p7, 7000);
    }

    function p7() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic7').fadeIn(3000).fadeOut(9000);
        setTimeout(p8, 7000);
    }

    function p8() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic8').fadeIn(3000).fadeOut(9000);
        setTimeout(p9, 7000);
    }

    function p9() {
        $('.topPic img').css({
            opacity: '1',
        });
        $('#shopPic9').fadeIn(3000).fadeOut(9000);
        setTimeout(p1, 7000);
    }
    p1();
});

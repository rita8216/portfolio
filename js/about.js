
$(function() {

    $('#searchBigContent').hide();
    $('.searchBig').click(function() {
        $('#searchBigContent').slideToggle(500);
    });

    $('#aboutInfo').ghostType();
    $('.QA_answer').hide();
    $('.QA_title').click(function() {
        $(this).next().slideToggle();
    });
    var judge = 0;
    $('#showHide').click(function() {
        if (judge == 0) {
            $('.QA_answer').slideDown();
            judge = 1;
        } else {
            $('.QA_answer').slideUp();
            judge = 0;
        }
    });
    $(window).scroll(function() {
        var wh = $(this).scrollTop();
        if (wh >= 100) {
            $('.aboutRow h1').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1000
            );
            $('.aboutRow p').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1500
            );

            setTimeout(showPic, 1500);

            function showPic() {
                $('.aboutRow img').animate({
                        opacity: '1',
                    },
                    2500
                );
            }
        }
        if (wh >= 650) {
            $('.customizedRow ').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1000
            );
        }
        if (wh >= 850) {
            $('.QAList ').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1000
            );
        }
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()<=0){

    $(".explore").addClass("at_top")

    }else{ $(".explore").removeClass("at_top")

    }
  });
$(function() {
    setTimeout(hidePic, 4000);

    function hidePic() {
        $('.showArea').animate({
                // 'margin-top': '-200%',
                'opacity': '0'
            },
            1000
        );
        $('.showArea').animate({
             'margin-top': '-200%'

        },
        1300
    );
    }

    // $('#searchBigContent').hide();
    // $('.searchBig').click(function() {
    //     $('#searchBigContent').slideToggle(500);
    // });

    $(window).scroll(function() {
        var wh = $(this).scrollTop();
        if (wh >= 250) {
            // alert('hello');
            $('.aboutContent h1').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1000
            );
            $('.aboutContent p').animate({
                    opacity: '1',
                    'margin-left': '0px',
                },
                1500
            );
        }
        if (wh >= 150) {
            // alert('hello');
            $('.slogan .paragragh').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                1000
            );
        }
        if (wh >= 700) {
            $('#features1').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                800
            );
            $('#features2').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                1200
            );
            $('#features3').animate({
                    opacity: '1',
                    'margin-top': '0px',
                },
                2000
            );
        }
    });

    // $(window).scroll(function() {
    //     var win = $(window),
    //         hWin = win.height(),
    //         // wWin = win.width(),
    //         // 當前視窗和滾動條頂部的距離
    //         scroll = $(window).scrollTop();
    //     var tCont = $(this).offset().top();
    //     if (scroll > tCont - hWin * 0.8) {
    //         // alert('good')
    //         $('.slogan p').addClass('showP');
    //     }
    // });

    // function setScroll() {
    //     var win = $(window),
    //         hWin = win.height(),
    //         // wWin = win.width(),
    //         // 當前視窗和滾動條頂部的距離
    //         scroll = $(window).scrollTop();
    //     move.each(function() {
    //         // 指定元素距離頂部的距離
    //         var tCont = $(this).offset().top();
    //         if (scroll > tCont - hWin * 0.8) {
    //             $('.slogan p').addClass('showP');
    //         }
    //     });
    // }

    // $('arrow-right').click(function() {
    //     count = 0;

    //     $('#pic1').fadeIn(1000).$('#pic2').fadeOut(1000);
    // });
});


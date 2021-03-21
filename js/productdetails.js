
$(function() {
    $('.groupTitle').click(function() {
        $(this).next().slideToggle(500);
    });

    $('#searchBigContent').hide();
    $('.searchBig').click(function() {
        $('#searchBigContent').slideToggle(500);
    });
});

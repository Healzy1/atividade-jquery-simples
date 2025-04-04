$(document).ready(function () {
    $('.thumbnail').click(function () {
        var newSrc = $(this).attr('src');
        $('#mainImage').fadeOut(100, function () {
            $(this).attr('src', newSrc).fadeIn(100);
        });
    });
});

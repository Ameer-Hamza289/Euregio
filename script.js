$(document).ready(function () {
    $('.btn-contact').click(function (e) {
        e.preventDefault();
        window.location.href = '/contact.html';
    });

    $('.back-to-news').click(function (e) {
        e.preventDefault();
        window.location.href = '/news.html';
    });
    
    const defaultPadding = 375;

    $('.font-size-100').click(function () {
        $('html').css('font-size', '16px');
        $('.font-size-100, .font-size-150, .font-size-200').removeClass('active-font'); 
        $('.px-375').css('padding-inline', defaultPadding);
        $('.view-all-events').css('margin-top','0rem');
        $('.view-all-news').css('margin-top','0rem');
        $(this).addClass('active-font');
    });
    
    $('.font-size-150').click(function () {
        $('html').css('font-size', '24px');
        $('.font-size-100, .font-size-150, .font-size-200').removeClass('active-font');
        $('.px-375').css('padding-inline', '30px');
        $('.view-all-events').css('margin-top','3rem');
        $('.view-all-news').css('margin-top','3rem');
        $(this).addClass('active-font');
    });
    
    $('.font-size-200').click(function () {
        $('.font-size-100, .font-size-150, .font-size-200').removeClass('active-font'); 
        $('html').css('font-size', '32px');
        $('.carousel-indicators').css('display','none');
        $('.px-375').css('padding-inline', '20px');
        $('.view-all-events').css('margin-top','3rem');
        $('.view-all-news').css('margin-top','3rem');
        $(this).addClass('active-font');
    });

});
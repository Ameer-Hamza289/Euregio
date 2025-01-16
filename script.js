$(document).ready(function () {
    $('.btn-contact').click(function (e) {
        e.preventDefault();
        window.location.href = '/contact.html';
    });

    $('.back-to-news').click(function (e) {
        e.preventDefault();
        window.location.href = '/news.html';
    });


    $('.font-size-100').click(function () {
        $('body').css('font-size', '1rem');
        $('.font-size-100, .font-size-150, .font-size-200').removeClass('active-font'); 
        $(this).addClass('active-font');
    });
    
    $('.font-size-150').click(function () {
        $('body').css('font-size', '1.5rem');
        $('.font-size-100, .font-size-150, .font-size-200').removeClass('active-font'); 
        $(this).addClass('active-font');
    });
    
    $('.font-size-200').click(function () {
        $('.font-size-100, .font-size-150, .font-size-200').removeClass('active-font'); 
        $('body').css('font-size', '2rem');
        $(this).addClass('active-font');
    });

});
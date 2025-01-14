$(document).ready(function() {
    $('.btn-contact').click(function(e) {
        e.preventDefault();
        window.location.href = '/contact.html';
    });

    $('.back-to-news').click(function(e) {
        e.preventDefault();
        window.location.href = '/news.html';
    });
});
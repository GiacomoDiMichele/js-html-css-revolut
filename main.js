$(document).ready(function() {

    $('.funzionalita-menu').mouseenter(function() {
        $('.dropdown-menu').addClass('active');
        $('.dropdown-abbonamenti').removeClass('active');
     });

    $('.dropdown-menu').mouseleave(function() {
        $('.dropdown-menu').removeClass('active');
     });

    $('.abbonamenti-menu').mouseenter(function() {
        $('.dropdown-abbonamenti').addClass('active');
        $('.dropdown-menu').removeClass('active');
     });

    $('.dropdown-abbonamenti').mouseleave(function() {
        $('.dropdown-abbonamenti').removeClass('active');
     });

});

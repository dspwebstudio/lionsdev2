//adding background blue on navbar
$(document).ready(function() {
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".navbar").addClass("solid") : $(".navbar").removeClass("solid");
        $(this).scrollTop() > 100 ? $("header").addClass("shadow-lg") : $("header").removeClass("shadow-lg");
        $(this).scrollTop() > 100 ? $(".hr-header").addClass("d-none") : $(".hr-header").removeClass("d-none");
        $(this).scrollTop() == 0 ? $(".footer-button-back").addClass("d-none") : $(".footer-button-back").removeClass("d-none");
    })
});
$('.navbar-toggler').click(function () { 
    $('.navbar').addClass('solid');
});
$('.dropdown-item').click(function () { 
    $('.navbar-toggler').click();
    $('.navbar').css('height', '72px');
});

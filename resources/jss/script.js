function openMenu () {
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu () {
    document.getElementById('navbar').style.height = "0%";
}
$(function(){
    $('.menu-items a, scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollop: $($.attr(this, 'href')).offset().top
        }, 2000);
    });
});
$(document).ready(function() {
    initModule();
});
 
 function initModule() {
    openMenu();
    goTop();
}

function openMenu() {

    if($('#menu-vertical').hasClass('closed')) {
        $('#menu-vertical').removeClass('closed');
        $('#menu-vertical').addClass('menu-vertical');
    } else {
        $('#menu-vertical').removeClass('menu-vertical');
        $('#menu-vertical').addClass('closed');
    }
}

function goTop(){
    $(window).scrollTop(0);
}
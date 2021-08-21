/*
Cambiar Opacidad y Tamaño Navbar
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2;

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

/*
Tooltip en Quienes Somos
*/

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
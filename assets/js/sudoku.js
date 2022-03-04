$(document).ready(function(){
    let height = $(window).height();
    let heightNav = $('.navbar').height();

    $('.contenedor').height(height - heightNav);
    $('.fila').height(height - heightNav);
    
});
$(document).ready(function () {

    $(".nav-link").click(function (event) {

        //bloqueamos la función del anchor original
        event.preventDefault();

        //dirigimos de manera animada al id del anchor
        $('html,body').animate({
            //le indicamos al scroll vertical que se dirija al objeto con el id
            //guardado en el anchor a su posición top.
            scrollTop: $(this.hash).offset().top - 10}, 900);

    });
    
    // Carousel Activo
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });

});

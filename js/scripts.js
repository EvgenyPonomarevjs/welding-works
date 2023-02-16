$(document).ready(function() { 
    var button = $('#button-up');	
    $(window).scroll (function () {
      if ($(this).scrollTop () > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
  });	 
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 
  });
  $(function() {
    // Owl Carousel
    var owl = $("#js-carousel-1");
    owl.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
        items: 1,
        dots: true,
        pagination : true,
        responsive: {
          500: {
            // Количество элементов 2
            items: 1,
            // Включаем точки
            dots: true
          },
      
          // Ширина от 800 пикселей
          800: {
            // Количество элементов 3
            items: 1,
            // Включаем точки
            dots: true
          }
        }
    });
  });


  $(document).ready(function() {
    $("#your_link").fancybox({
      hideOnOverlayClick:true,
      hideOnContentClick:true
    });
  });
  $(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });
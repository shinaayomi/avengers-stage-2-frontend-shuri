const hamburger = document.getElementById('hamburger')


$(function() {
    $('#hamburger').on('click', function() {
        if($('.items').hasClass('active')) {
            $('.items').removeClass('active')
        }
        else{
            $('.items').addClass('active')
        }
    })
})


$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});



$('.carousel-testimonial').owlCarousel({
  loop:true,
  margin:0,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})
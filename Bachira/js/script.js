$(document).ready(function() {
$('.popular-product-row').slick({
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:0,
    prevArrow:0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.brands-row').slick({
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow:0,
    prevArrow:0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // navbar-script
    $("#nav-icon1").click(function(){
      $(".mobile-nav").toggleClass("open_menu");
    });


  $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
  });


  // login-script
    $(".login").click(function(){
      $("#login-section").fadeToggle(200);
    });


  // register-form-script

  $(".register").click(function(){
    $("#register-form").fadeToggle(200);
  });

// pop-up- img-script
$('.view-popup').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  mainClass: 'mfp-img-mobile',
  gallery : {
      enabled:true,
  }
});

    AOS.init({
       offset: 200,
       duration: 900,
      easing: 'ease-in-sine',
      delay: 100,
    });
})
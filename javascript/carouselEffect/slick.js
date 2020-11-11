$(document).ready(function(){    
  $('div.slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    pauseOnHover: true,
    dots: true,
    prevArrow: '<button id="prev"><i class="fas fa-angle-double-left" id="prevAngle"></i></button>',
    nextArrow: '<button id="next"><i class="fas fa-angle-double-right"id="nextAngle"></i></button>',    
  });
});
$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 4,
    infinite:true,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
  });
  
  const config={
    type: 'carousel',
  perView: 4,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }}
  };


    new Glide('.glide', config).mount()

document.body.scrollLeft=0;
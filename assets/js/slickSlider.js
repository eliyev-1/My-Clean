$('.services__slider').slick({
  dots: false,
  prevArrow: '<div class="custom-arrow prev-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
  nextArrow: '<div class="custom-arrow next-arrow"><i class="fa-solid fa-arrow-left"></i></div>',
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 0,
      
      }
    }
  ]
});

    $('.products__slider').slick({
      dots: true,
      arrows: false,
   autoplay: false,
  
   autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0,
          
          }
        },
       
    
      ]
    });

    $('.cars__slider').slick({
      dots: true,
      arrows: false,
   autoplay: false,
  
   autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0,
          
          }
        },
       
    
      ]
    });

    $('.blog__slider').slick({
      dots: false,
      prevArrow: '<div class="custom-arrow prev-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
    nextArrow: '<div class="custom-arrow next-arrow"><i class="fa-solid fa-arrow-left"></i></div>',
   
   autoplay: false,
   arrows: true,
  
   autoplaySpeed: 2000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 0,
           
          }
        },
       
    
      ]
    });
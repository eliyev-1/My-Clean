let products = document.querySelector('.products')


fetch("../json/products.json").then(function(response){
     return response.json()
}).then(function(productsData){
      productsData?.map(item=>{
            let productCard = document.createElement('div');
            productCard.className = 'products__card';
      
            productCard.innerHTML = ` 
      <a href="../html/productsDeatail.html">
        <div class="products__card__img">
          <img src="${item.img}" alt="">
        </div>
        <h2>${item.header}</h2>
       
        <p>${item.tittle}</p>
      </a>

  
  
   

      
      `;

   productCard.href="/assets/html/productsDetail.html"
      products.appendChild(productCard);


     })
})






let productsSlider = document.querySelector('.products__slider')

fetch("../assets/json/products.json").then(function(response){
  return response.json()
}).then(function(productsData){
   productsData?.map(item=>{
         let productSliderCard = document.createElement('a');
       ;
   
         productSliderCard.innerHTML = `
         <div class="products__slider__card">
   <div>
     <div class="products__card__img">
       <img src="${item.imgIndex}" alt="">
     </div>
     <h2>${item.header}</h2>
    
     <p>${item.tittle}</p>
     </div>
   </div>





   
   `
   productSliderCard.href="./assets/html/productsDetail.html"
   productsSlider.appendChild(productSliderCard);
   productSliderCard.addEventListener('click',()=>{
    localStorage.setItem("products__data__link", JSON.stringify(item))

   })

  })

  $('.products__slider').slick({
    prevArrow: '',
    nextArrow: '',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
 
})


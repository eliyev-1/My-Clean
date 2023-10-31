let blogSlider = document.querySelector('.blog__slider')

fetch("./assets/json/blog.json").then(function(response){
  return response.json()
}).then(function(blogData){
      blogData?.map(item=>{
         let blogSliderCard = document.createElement('div');
         blogSliderCard.className = 'blog__slider__card';
   
         blogSliderCard.innerHTML = `
         <a href="/assets/html/blogDetail.html">

         <div class="blog__slider__card__left">

          <div class="blog__slider__card__img">
            <img src="${item.imgIndex}" alt="">
          </div>


         </div>
         <div class="blog__slider__card__right">
          <h2>${item.header}</h2>
          <p>${item.tittle.slice(0,100)}</p>
             <div class="blog__link">
              <a href="#"><span>Ətraflı</span><span>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M9.16174 12.1082L20.3475 23.2939L10.6415 23.2732C10.0868 23.2729 9.55498 23.4929 9.16301 23.8848C8.77103 24.2768 8.55101 24.8086 8.55136 25.3633C8.5517 25.918 8.77238 26.4501 9.16484 26.8426C9.5573 27.235 10.0894 27.4557 10.6441 27.4561L25.3725 27.4652C25.6466 27.4594 25.9169 27.3995 26.1677 27.2889C26.6735 27.078 27.0754 26.676 27.2864 26.1703C27.3969 25.9194 27.4568 25.6492 27.4626 25.375L27.4535 10.6467C27.4544 10.3717 27.4009 10.0992 27.2961 9.84488C27.1912 9.59056 27.0371 9.35946 26.8425 9.1649C26.648 8.97035 26.4169 8.8162 26.1625 8.71133C25.9082 8.60647 25.6357 8.55298 25.3608 8.55393C25.0858 8.55264 24.8134 8.60579 24.5592 8.71034C24.305 8.81489 24.0741 8.96876 23.8798 9.16307C23.6854 9.35738 23.5316 9.58829 23.427 9.84248C23.3225 10.0967 23.2693 10.3691 23.2706 10.6441L23.2914 20.3501L12.1056 9.16431C11.7147 8.77345 11.1848 8.55367 10.6324 8.55333C10.0799 8.55299 9.55029 8.77211 9.15991 9.16249C8.76953 9.55287 8.55041 10.0825 8.55075 10.6349C8.55109 11.1874 8.77087 11.7173 9.16174 12.1082Z" fill="#EFEFEF"/>
                </svg>
              </span></a>
             </div>
         </div>
         </a>

   `;
   
   blogSlider.appendChild(blogSliderCard);

  })
  
$('.blog__slider').slick({
      prevArrow: '',
      nextArrow: '',
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

 
})

let blog = document.querySelector('.blog__page')

fetch("/assets/json/blog.json").then(function(response){
  return response.json()
}).then(function(blogData){
      blogData?.map(item=>{
         let blogCard = document.createElement('div');
         blogCard.className = 'blog__card';
   
         blogCard.innerHTML = `
         <a href="../html/blogDetail.html">
         <div class="blog__card">
           <div class="blog__card__left">
            <div class="blog__card__left__image">
             <img src="../img/servicePageCardImage.png" alt="">
            </div>
           </div>
           <div class="blog__card__right">
             <h3>${item.header}</h3>
             <p>${item.tittle.slice(0,200)}
             </p>
             
             <div class="apply__button">
               <span>Ətraflı</span> <span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                   <path d="M9.16174 12.1082L20.3475 23.2939L10.6415 23.2732C10.0868 23.2729 9.55498 23.4929 9.16301 23.8848C8.77103 24.2768 8.55101 24.8086 8.55136 25.3633C8.5517 25.918 8.77238 26.4501 9.16484 26.8426C9.5573 27.235 10.0894 27.4557 10.6441 27.4561L25.3725 27.4652C25.6466 27.4594 25.9169 27.3995 26.1677 27.2889C26.6735 27.078 27.0754 26.676 27.2864 26.1703C27.3969 25.9194 27.4568 25.6492 27.4626 25.375L27.4535 10.6467C27.4544 10.3717 27.4009 10.0992 27.2961 9.84488C27.1912 9.59056 27.0371 9.35946 26.8425 9.1649C26.648 8.97035 26.4169 8.8162 26.1625 8.71133C25.9082 8.60647 25.6357 8.55298 25.3608 8.55393C25.0858 8.55264 24.8134 8.60579 24.5592 8.71034C24.305 8.81489 24.0741 8.96876 23.8798 9.16307C23.6854 9.35738 23.5316 9.58829 23.427 9.84248C23.3225 10.0967 23.2693 10.3691 23.2706 10.6441L23.2914 20.3501L12.1056 9.16431C11.7147 8.77345 11.1848 8.55367 10.6324 8.55333C10.0799 8.55299 9.55029 8.77211 9.15991 9.16249C8.76953 9.55287 8.55041 10.0825 8.55075 10.6349C8.55109 11.1874 8.77087 11.7173 9.16174 12.1082Z" fill="#EFEFEF"/>
                 </svg>
               </span>
             </div>
           
   
           </div>
         </div>
 
       </a>

   `;
   
   blog.appendChild(blogCard);
   blogCard.addEventListener('click',()=>{
    localStorage.setItem("blogDetail__data__link", JSON.stringify(item))

   })

  })
  


 
})


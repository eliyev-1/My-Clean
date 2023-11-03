let cars = document.querySelector(".carsPage");

fetch("/assets/json/cars.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (carsData) {
    carsData.map((item) => {
      let carsCard = document.createElement("div");
      carsCard.className = "cars__card";
      carsCard.innerHTML = `
   <a href="/assets/html/carsDetail.html">
     <div class="cars__card__img">
       <img src="${item.imgIndex}" alt="">
     </div>
     <h2>${item.header}</h2>
     <h3>${item.price}</h3>
     <p>${item.tittle.slice(0, 100)}</p>
   </a>

   `;

      cars?.appendChild(carsCard);
      carsCard.addEventListener("click", () => {
        localStorage.setItem("cars__data__link", JSON.stringify(item));
      });
    });
  });

let carsSlider = document.querySelector(".cars__slider");

fetch("/assets/json/cars.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (carsSliderData) {
    carsSliderData.map((item) => {
      let carsSliderCard = document.createElement("div");
      carsSliderCard.className = "products__slider__card";
      carsSliderCard.innerHTML = `
   <a href="/assets/html/carsDetail.html">
     <div class="cars__slider__card__img">
       <img src="${item.imgIndex}" alt="">
     </div>
     <h2>${item.header}</h2>
     <h3>${item.price}</h3>
     <p>${item.tittle.slice(0, 100)}</p>
   </a>

   `;

      carsSlider?.appendChild(carsSliderCard);
      carsSliderCard.addEventListener("click", () => {
        localStorage.setItem("cars__data__link", JSON.stringify(item));
      });
    });
    $(".cars__slider").slick({
      prevArrow: "",
      nextArrow: "",
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });

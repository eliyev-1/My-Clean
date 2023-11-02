let carsDetail = document.querySelector('.cars__detail')
let carsDetail__data=localStorage.getItem("cars__data__link")
var carsDetail__data__parse = JSON.parse(carsDetail__data);
carsDetail.innerHTML = ` <div class="cars__detail__left">
<h1>${carsDetail__data__parse.header}</h1>
<h3>${carsDetail__data__parse.price}</h3>
<p>

${carsDetail__data__parse.tittle}

</p>
<ul>
      <li><span>Şəhər</span><span>${carsDetail__data__parse.infoList.city}</span></li>
      <li><span>Marka</span><span>${carsDetail__data__parse.infoList.brand}</span></li>
      <li><span>Model</span><span>${carsDetail__data__parse.infoList.model}</span></li>
      <li><span>Buraxılış ili</span><span>${carsDetail__data__parse.infoList.productionYear}</span></li>
      <li><span>Ban növü</span><span>${carsDetail__data__parse.infoList.banType}</span></li>
      <li><span>Rəng</span><span>${carsDetail__data__parse.infoList.color}</span></li>
      <li><span>Mühərrik</span><span>${carsDetail__data__parse.infoList.engine}</span></li>
      <li><span>Mühərrikin gücü</span><span>${carsDetail__data__parse.infoList.enginePower}</span></li>
      <li><span>Yanacaq növü</span><span>${carsDetail__data__parse.infoList.fuelType}</span></li>
      <li><span>Yürüş</span><span>${carsDetail__data__parse.infoList.march}</span></li>
      
</ul>
</div>
<div class="cars__detail__right">
<div class="cars__detail__right__slider">
      <div class="slider-for">
      ${carsDetail__data__parse.img.map(item => `<div><img src="${item}" alt=""></div>`).join('')}

           
            
           
      </div>
      <div class="cars__detail__right__nav__slider">
      ${carsDetail__data__parse.img.map(item => `<div><img src="${item}" alt=""></div>`).join('')}
         
      </div>

</div>





</div>


`
let pageName= document.querySelector('.page__name')
pageName.innerHTML = `${carsDetail__data__parse.header}`

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".cars__detail__right__nav__slider",
});
$(".cars__detail__right__nav__slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,

  asNavFor: ".slider-for",
  dots: true,
  arrows: false,
  infinite: false,

  focusOnSelect: true,
  lazyLoad: "ondemand",
  slidesToShow: 3,
  slidesToScroll: 1,
});

let productsDetail = document.querySelector('.products__detail')
let productsDetail__data=localStorage.getItem("products__data__link")
var productsDetail__data__parse = JSON.parse(productsDetail__data);
productsDetail.innerHTML=`
<div class="products__detail__left">
<h1>${productsDetail__data__parse.header}</h1>

<p>
${productsDetail__data__parse.tittle}


</p>
</div>
<div class="products__detail__right">
<div class="products__detail__right__img">
    <img src="${productsDetail__data__parse.img}" alt="">
</div>


</div>

`
let pageName= document.querySelector('.page__name')
pageName.innerHTML = `${productsDetail__data__parse.header}`
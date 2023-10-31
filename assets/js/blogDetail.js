let blockDetail = document.querySelector('.blog__detail__left')
let blogDetail__data=localStorage.getItem("blogDetail__data__link")
var blogDetail__data__parse = JSON.parse(blogDetail__data);
blockDetail.innerHTML=`

<div class="blog__detail__left__img">
        <img src="${blogDetail__data__parse.imgIndex}" alt="">
      </div>
      <p>
        ${blogDetail__data__parse.tittle}

      </p>
    

`
let blogHeader = document.querySelector('.page__header__tittle')
blogHeader.innerHTML=`${blogDetail__data__parse.header}`

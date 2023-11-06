let menu = document.querySelector('.menu')
let menuButton = document.querySelector('.nav__menu')
let menuExitButton = document.querySelector('.menu__exit')

menuButton.onclick=()=>{
      menu.classList.add('menu__active');

}
menuExitButton.onclick=()=>{
      menu.classList.remove('menu__active');

}
let abuutUsTittle=document.querySelector('.about__us__tittle')
let header__left__tittle=document.querySelector('.header__left__tittle')
let abuutUsTittleData="MyClean olaraq bütün markalı avtomobillər üçün 10-dan artıq xidmət təklif edir, həmçinin müxtəlif brendlərə məxsus avtomobillərin satışı ilə məşğuluq.Xİdmət çeşidlərimizə buxarlı kimyəvi təmizləmə, cilalama, rəngləmə, mühərrikl\rin yuyulması və digər xidmətlər daxildir.Xidmət təklifini müştərilərin ehtiyaclarına uyğun şəkildə saxlayır və müştəri məmnuniyyətinə önəm veririk.Myclean komandası yüksək təlim keçmiş peşəkar mütəxəssislərdən ibarətdir və hərtərəfli, standartlara cavab verən resurslarla təchiz olunmuşdur Bu səbəbdən burada hər zaman etibar edə biləcəyiniz mütəxəssislərlə qarşılaşacaqsınız."

abuutUsTittle.innerHTML=abuutUsTittleData.slice(0,400)+". . ."
header__left__tittle.innerHTML=abuutUsTittleData.slice(0,100)+". . ."

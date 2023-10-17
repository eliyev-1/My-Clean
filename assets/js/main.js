let menu = document.querySelector('.menu')
let menuButton = document.querySelector('.nav__menu')
let menuExitButton = document.querySelector('.menu__exit')
menuButton.onclick=()=>{
      menu.classList.add('menu__active');

}
menuExitButton.onclick=()=>{
      menu.classList.remove('menu__active');

}


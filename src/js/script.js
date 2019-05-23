// пункт списка
let ice = document.querySelector('.restaurant__list-item--ice');

// контейнер где меняем стили
let img = document.querySelector('.restaurant__picture-item');

ice.onmouseover = function() {
  img.style.backgroundImage = "url('../img/purchase/furniture/ice.jpg')";
}
ice.onmouseout = function() {
  img.style.backgroundImage = "url('../img/purchase/furniture/worm.jpg')";
}

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

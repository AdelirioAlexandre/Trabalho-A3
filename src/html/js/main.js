let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.menu')

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('activate');
}

//notificação
let bell = document.querySelector('.notificacao');

document.querySelector('#bell-icon').onclick=() =>{
    bell.classList.toggle('activate');
}

//Swiper
var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


  //Barra de scroll(precisa ajustar)
  window.onscroll = function(){mfunction()};

  function mfunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height)*100;
    document.getElementById('#scroll-bar').style.width = scrolled + '%';
  }

  
const swiper = new Swiper('.card-wrapper', {
    loop: false,
    allowTouchMove: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        620: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1300: {
            slidesPerView: 5
        },
        1500: {
            slidesPerView: 6
        },
        1530:{
            slidesPerView: 7
        },
    }
});

function updateNavigationButtons() {
    const slidesPerView = swiper.params.slidesPerView; // Quantidade de slides visíveis
    const currentIndex = swiper.activeIndex; // Índice atual do slide
    const maxIndex = swiper.slides.length - slidesPerView; // Último índice permitido
  
    // Manipular o botão "anterior"
    if (currentIndex === 0) {
      buttonPrev.classList.add('disabled'); // Adiciona a classe "disabled"
    } else {
      buttonPrev.classList.remove('disabled'); // Remove a classe "disabled"
    }
  
    // Manipular o botão "próximo"
    if (currentIndex >= maxIndex) {
      buttonNext.classList.add('disabled'); // Adiciona a classe "disabled"
    } else {
      buttonNext.classList.remove('disabled'); // Remove a classe "disabled"
    }
}



const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");

buttonNext.addEventListener("click", () => {
    const slidesPerView = swiper.params.slidesPerView; // Quantidade de slides visíveis
    const currentIndex = swiper.activeIndex; // Índice atual do slide
    const maxIndex = swiper.slides.length - slidesPerView; // Último índice permitido

    if (currentIndex + slidesPerView < swiper.slides.length) {
        swiper.slideTo(currentIndex + slidesPerView); // Vá para os próximos 'slidesPerView'
        
    } 
    else{
        swiper.slideTo(maxIndex); // Vá para o último conjunto de slides visíveis
    }
    updateNavigationButtons();
});
  
buttonPrev.addEventListener("click", () => {
    const slidesPerView = swiper.params.slidesPerView; // Quantidade de slides visíveis
    const currentIndex = swiper.activeIndex; // Índice atual do slide

    if(currentIndex - slidesPerView >= 0) {
        swiper.slideTo(currentIndex - slidesPerView); // Volte os 'slidesPerView' anteriores
    } 
    else{
        swiper.slideTo(0); // Volte para o início
    }
    updateNavigationButtons();
});

updateNavigationButtons();

const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide") )
}

[openModal, closeModal].forEach((el) => {
    el.addEventListener("click", () => {
        toggleModal();
    });
});

// Rightside menu
const headerBtn = document.querySelector('.header__btn');
const rightsideMenuBtnClose = document.querySelector('.rightside-menu__close');
const rightsideMenu = document.querySelector('.rightside-menu');

const openRightsideMenu = () => {
    rightsideMenu.classList.remove('rightside-menu--close');
}

const closeRightsideMenu = () => {
    rightsideMenu.classList.add('rightside-menu--close');
}

headerBtn.addEventListener('click', openRightsideMenu);
rightsideMenuBtnClose.addEventListener('click', closeRightsideMenu);





// Swiper js
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

const swiperContact = new Swiper('.swiper-contact', {
    slidesPerGroup: 10,
    slidesPerView: 10,
    spaceBetween: 17,
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination-contact',
        type: 'bullets',
        clickable: true,
    },
});

const swiperBlog = new Swiper('.swiper-blog', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 50000,
    },
});

// MixItUp Filter
const mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.bedroom',
    },
});


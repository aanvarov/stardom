$(function () {
  $('.top__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    fade: true,
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24V21.1716V13L40 13V11L12 11V2.82843V0L10 2L1.41422 10.5858L0 12L1.41422 13.4142L10 22L12 24ZM2.82843 12L10 19.1716V4.82843L2.82843 12Z"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 24V21.1716V13L0 13V11L28 11V2.82843V0L30 2L38.5858 10.5858L40 12L38.5858 13.4142L30 22L28 24ZM37.1716 12L30 19.1716V4.82843L37.1716 12Z"/></svg></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          prevArrow: false,
          nextArrow: false
        }
      }
    ]

  });
  $('.catalog__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.catalog__slider-nav',
    draggable: false
  });
  $('.catalog__slider-nav').slick({
    infinite: true,
    draggable: false,
    outerEdgeLimit: false,
    asNavFor: '.catalog__slider',
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.24137 10.7583L0.54928 6.22845C0.261351 5.95047 0.261351 5.49979 0.54928 5.22181L5.24137 0.691944C5.5293 0.413969 5.99612 0.413969 6.28405 0.691944C6.57198 0.969919 6.57198 1.42061 6.28405 1.69858L2.17409 5.66645C2.17572 5.6858 2.17656 5.70537 2.17656 5.72513C2.17656 5.74489 2.17572 5.76446 2.17409 5.78381L6.28405 9.75168C6.57198 10.0297 6.57198 10.4803 6.28405 10.7583C5.99612 11.0363 5.5293 11.0363 5.24137 10.7583Z"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.20883 10.7583L6.90092 6.22845C7.18884 5.95047 7.18884 5.49979 6.90092 5.22181L2.20883 0.691944C1.9209 0.413969 1.45407 0.413969 1.16614 0.691944C0.878213 0.969919 0.878213 1.42061 1.16614 1.69858L5.27611 5.66645C5.27447 5.6858 5.27364 5.70537 5.27364 5.72513C5.27364 5.74489 5.27447 5.76446 5.27611 5.78381L1.16614 9.75168C0.878213 10.0297 0.878213 10.4803 1.16614 10.7583C1.45407 11.0363 1.9209 11.0363 2.20883 10.7583Z"/></svg></button>'
  });
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 6,
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24V21.1716V13L40 13V11L12 11V2.82843V0L10 2L1.41422 10.5858L0 12L1.41422 13.4142L10 22L12 24ZM2.82843 12L10 19.1716V4.82843L2.82843 12Z"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 24V21.1716V13L0 13V11L28 11V2.82843V0L30 2L38.5858 10.5858L40 12L38.5858 13.4142L30 22L28 24ZM37.1716 12L30 19.1716V4.82843L37.1716 12Z"/></svg></button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
          dots: true
        }
      }
    ]
  });

  $('.team__items').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.24137 10.7583L0.54928 6.22845C0.261351 5.95047 0.261351 5.49979 0.54928 5.22181L5.24137 0.691944C5.5293 0.413969 5.99612 0.413969 6.28405 0.691944C6.57198 0.969919 6.57198 1.42061 6.28405 1.69858L2.17409 5.66645C2.17572 5.6858 2.17656 5.70537 2.17656 5.72513C2.17656 5.74489 2.17572 5.76446 2.17409 5.78381L6.28405 9.75168C6.57198 10.0297 6.57198 10.4803 6.28405 10.7583C5.99612 11.0363 5.5293 11.0363 5.24137 10.7583Z"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.20883 10.7583L6.90092 6.22845C7.18884 5.95047 7.18884 5.49979 6.90092 5.22181L2.20883 0.691944C1.9209 0.413969 1.45407 0.413969 1.16614 0.691944C0.878213 0.969919 0.878213 1.42061 1.16614 1.69858L5.27611 5.66645C5.27447 5.6858 5.27364 5.70537 5.27364 5.72513C5.27364 5.74489 5.27447 5.76446 5.27611 5.78381L1.16614 9.75168C0.878213 10.0297 0.878213 10.4803 1.16614 10.7583C1.45407 11.0363 1.9209 11.0363 2.20883 10.7583Z"/></svg></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          dots: true,
          prevArrow: false,
          nextArrow: false,
        }
      },
      {
        breakpoint: 430,
        settings: {
          dots: true,
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false
        }
      }
    ]

  });

  if (window.innerWidth < 430) {
    $('.news__items').slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow:
        '<button class="slider-btn slider-btn__left"><svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.24137 10.7583L0.54928 6.22845C0.261351 5.95047 0.261351 5.49979 0.54928 5.22181L5.24137 0.691944C5.5293 0.413969 5.99612 0.413969 6.28405 0.691944C6.57198 0.969919 6.57198 1.42061 6.28405 1.69858L2.17409 5.66645C2.17572 5.6858 2.17656 5.70537 2.17656 5.72513C2.17656 5.74489 2.17572 5.76446 2.17409 5.78381L6.28405 9.75168C6.57198 10.0297 6.57198 10.4803 6.28405 10.7583C5.99612 11.0363 5.5293 11.0363 5.24137 10.7583Z"/></svg></button>',
      nextArrow:
        '<button class="slider-btn slider-btn__right"><svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.20883 10.7583L6.90092 6.22845C7.18884 5.95047 7.18884 5.49979 6.90092 5.22181L2.20883 0.691944C1.9209 0.413969 1.45407 0.413969 1.16614 0.691944C0.878213 0.969919 0.878213 1.42061 1.16614 1.69858L5.27611 5.66645C5.27447 5.6858 5.27364 5.70537 5.27364 5.72513C5.27364 5.74489 5.27447 5.76446 5.27611 5.78381L1.16614 9.75168C0.878213 10.0297 0.878213 10.4803 1.16614 10.7583C1.45407 11.0363 1.9209 11.0363 2.20883 10.7583Z"/></svg></button>'

    });
  };

  $('.contacts__nav-link').on('click', function () {
    $('.contacts__nav-link').removeClass('active');
    $(this).addClass('active');
    $('.contacts__item').hide().animate({ opacity: 0 }, 10);
    $($(this).data("target")).show().animate({ opacity: 1 }, 500);
  });

  $('.navbar-toggler').click(function () {
    $('.header__bottom__inner').toggle(300);
  });

  $('.about__info-btn').click(function () {
    $('.showmore').toggle(400);
    $('.about__info-btn img').toggleClass('icon-transform');
  });

  // $('.count').each(function () {
  //   var $this = $(this);
  //   jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  //     duration: 1000,
  //     easing: 'swing',
  //     step: function () {
  //       $this.text(Math.ceil(this.Counter));
  //     }
  //   })
  // })

  $('.count').rCounter();


});


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
var myMap,
  myPlacemark;
function init() {
  // Создание карты.    
  myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [41.354109, 69.255677],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16.5,
    controls: []
  });

  myPlacemark = new ymaps.Placemark([41.353817, 69.254190], {
    // balloonContent: 'Это красивая метка'
  },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/map-pin.png',
      // Размеры метки.
      iconImageSize: [322, 124],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-50, -120]
    }

  );
  myPlacemark1 = new ymaps.Placemark([41.353817, 69.254190], {
    // balloonContent: 'Это красивая метка'
  },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/ellipse.svg',
      // Размеры метки.
      iconImageSize: [44, 44],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-22, -25]
    }

  );

  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark);
};

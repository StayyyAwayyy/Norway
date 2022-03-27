$(document).ready(function () {
  //
  //  wow animate
  //
  new WOW().init();

  //
  // scroll
  //

  let menuItems = $('.btn_soft-scroll');

  for (let i = 0; i < menuItems.length; i++) {
    $(menuItems[i]).on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  }

  //
  // burger
  //

  let menuBtn = $('.menu__burger');
  let menu = $('.menu');

  $(menuBtn).click(() => {
    $(menuBtn).toggleClass('active');
    $(menu).toggleClass('active');
  });

  $(window).scroll(() => {
    $(menuBtn).removeClass('active');
    $(menu).removeClass('active');
  });

  //
  // header fixed
  //
  let aboutOffset = $('.about').offset().top;
  let header = $('.header');
  let headerMenu = $('.header__menu');

  $(window).on('resize scroll reinit init ', function () {
    if ($(window).width() < '480') {
      if (window.pageYOffset >= aboutOffset) {
        $(header).addClass('header_fixed');
        $(header).css('padding', '15px');
        $(headerMenu).css('visibility', 'visible');
        $(headerMenu).prependTo('body');
      } else {
        $(header).removeClass('header_fixed');
        $(header).css('padding', '25px 0');
        $(headerMenu).appendTo('.main__header');
      }
    } else {
      $(header).removeClass('header_fixed');
      $(headerMenu).appendTo('.main__header');
    }
  });

  //
  // team slider
  //
  let teamSlider = $('.our-team');
  let teamItems = $('.our-team__item');
  let teamHideInfo = $('.our-team__info');
  let teamArrowUp = $('.our-team__arrow-up');
  let teamArrowDown = $('.our-team__arrow-down');
  let teamCurrent = $('.team__pages-current');
  let teamCount = $('.team__pages-count');

  $(teamSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if ($(window).width() > '1159') {
      $(teamCurrent).text(slick.currentSlide / 3 + 1 + ' ');
      $(teamCount).text(' / ' + slick.slideCount / 3);
    } else if ($(window).width() < '1159' && $(window).width() > '819') {
      $(teamCurrent).text(slick.currentSlide / 2 + 1 + ' ');
      $(teamCount).text(' / ' + slick.slideCount / 2);
    } else {
      $(teamCurrent).text(slick.currentSlide + 1 + ' ');
      $(teamCount).text(' / ' + slick.slideCount / 1);
    }
  });

  $(teamSlider).slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1159,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  for (let i = 0; i < teamItems.length; i++) {
    $(teamArrowUp[i]).click(() => {
      $(teamHideInfo[i]).css('transform', 'translate(0, -100%)');
      $(teamArrowUp[i]).hide();
      $(teamArrowDown[i]).show();
    });
    $(teamArrowDown[i]).click(() => {
      $(teamHideInfo[i]).css('transform', 'translate(0, -90px)');
      $(teamArrowDown[i]).hide();
      $(teamArrowUp[i]).show();
    });
  }

  $(teamSlider).on('afterChange', function () {
    $(teamHideInfo).css('transform', 'translate(0, -90px)');
    $(teamArrowDown).hide();
    $(teamArrowUp).show();
  });

  //
  // route
  //
  let toursItems = $('.tours__item');
  let toursBtn = $('.route__menu-item');
  let routeMap = $('.route__map');

  for (let i = 0; i < toursItems.length; i++) {
    $($(toursBtn)[i]).click(() => {
      $(toursItems).hide();
      $(toursBtn).removeClass('route__menu-item_active');
      $($(toursItems)[i]).show();
      $($(toursBtn)[i]).addClass('route__menu-item_active');
    });
  }

  //
  // collage slider
  //
  $('.tour-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          rows: 3,
        },
      },
    ],
  });

  $(window).on('resize init', function () {
    if ($(window).width() < '480') {
      $('.tour-slider__info-item span').text('чел.');
    } else {
      $('.tour-slider__info-item span').text('человек');
    }
  });

  //
  // review slider
  //
  let reviewSlider = $('.review-slider');
  let reviewCurrent = $('.review__pages-current');
  let reviewCount = $('.review__pages-count');
  let dots = $('.review-slider__dots');
  let hiddenText = $('.review-slider__hidden');
  let readMoreBtn = $('.review-slider__more');
  let readMoreText = $('.review-slider__more-text');

  $(reviewSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if ($(window).width() > '998') {
      $(reviewCurrent).text(slick.currentSlide / 2 + 1 + ' ');
      $(reviewCount).text(' / ' + slick.slideCount / 2);
    } else {
      $(reviewCurrent).text(slick.currentSlide / 1 + 1 + ' ');
      $(reviewCount).text(' / ' + slick.slideCount / 1);
    }
  });

  $(reviewSlider).on('afterChange', function () {
    for (let i = 0; i < readMoreBtn.length; i++) {
      $(dots[i]).show();
      $(readMoreText[i]).text('Читать больше');
      $(hiddenText[i]).hide();
      $(readMoreBtn[i]).css('margin-top', '30px');
    }
  });

  $(reviewSlider).slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  for (let i = 0; i < readMoreBtn.length; i++) {
    $(readMoreBtn[i]).click(() => {
      if ($(dots[i]).css('display') === 'none') {
        $(dots[i]).show();
        $(readMoreBtn[i]).text('Читать больше');
        $(hiddenText[i]).hide();
        $(readMoreBtn[i]).css('margin-top', '30px');
      } else {
        $(dots[i]).hide();
        $(readMoreBtn[i]).text('Читать меньше');
        $(hiddenText[i]).show();
        $(readMoreBtn[i]).css('margin-top', '5px');
      }
    });
  }

  //
  // hotels
  //
  let suiteMore = $('.suite__more');
  let suiteLess = $('.suite__less');
  let hotelNth2 = $('.suite__item:nth-child(n + 2)');
  let hotelNth3 = $('.suite__item:nth-child(n + 3)');

  suiteMore.click(() => {
    if ($(window).width() > '479') {
      $(hotelNth3).css('display', 'flex');
      suiteMore.hide();
      suiteLess.show();
    } else {
      $(hotelNth2).css('display', 'flex');
      suiteMore.hide();
      suiteLess.show();
    }
  });

  suiteLess.click(() => {
    if ($(window).width() > '479') {
      $(hotelNth3).css('display', 'none');
      suiteMore.show();
      suiteLess.hide();
    } else {
      $(hotelNth2).css('display', 'none');
      suiteMore.show();
      suiteLess.hide();
    }
  });

  //
  // accordion
  //
  $($('.accordion__content')[0]).css('display', 'block');

  $('.active__item .accordion__content').slideDown();

  $('.accordion__title').on('click', function () {
    $('.accordion__content').not($(this).next()).slideUp(299);
    $('.accordion__item').removeClass('accordion__item_active');
    $(this).next().slideDown(299).parent().addClass('accordion__item_active');
  });

  //
  // map
  //
  let btnMap = $('.adresses__btn');
  let btnMinsk = $('.adresses__btn_minsk');
  let btnOslo = $('.adresses__btn_oslo');
  let locationContainer = $('.location__container');

  $(btnMinsk).click(function () {
    $(btnMap).removeClass('adresses__btn_active');
    $(this).addClass('adresses__btn_active');
    $('.adresses__toggle').css('transform', 'translate(1%, 0)');
    $('.adresses__map-oslo').hide();
    $('.adresses__map-minsk').show();
  });

  $(btnOslo).click(function () {
    $(btnMap).removeClass('adresses__btn_active');
    $(this).addClass('adresses__btn_active');
    $('.adresses__toggle').css('transform', 'translate(-101%, 0)');
    $('.adresses__map-minsk').hide();
    $('.adresses__map-oslo').show();
  });

  $(btnOslo).one('click', function () {
    initMapOslo();
  });

  $(window).on('resize', function () {
    if ($(window).width() < '480') {
      $(locationContainer).css('padding', '0');
    } else {
      $(locationContainer).css('padding', '0 15px');
    }
  });

  //
  // form
  //
  let reserveFormBtn = $('.reserve-form__btn');
  let loader = $('.loader');

  $(reserveFormBtn).click((event) => {
    event.preventDefault();

    let reserveForm = $('.reserve-form__form');
    let reserveFormInp = $('.reserve-form input');
    let reserveFormName = $('.reserve-form__name');
    let reserveFormPhone = $('.reserve-form__phone');
    let reserveFormCheck = $('.reserve-form__check-box');
    let reserveFormErr = $('.reserve-form__check');

    for (let i = 0; i < reserveFormInp.length; i++) {
      if (!$(reserveFormInp[i]).val()) {
        $(reserveFormInp[i]).css('border', '1px solid #f36c6c');
      } else if ($(reserveFormInp[i]).val()) {
        $(reserveFormInp[i]).css('border', '1px solid #fff');
      }
    }

    if (!reserveFormCheck.prop('checked')) {
      $(reserveFormErr).addClass('reserve-form__check_error');
    } else {
      $(reserveFormErr).removeClass('reserve-form__check_error');
    }

    if (reserveFormName.val() && reserveFormPhone.val() && reserveFormCheck.prop('checked')) {
      $(loader).show();
      $.ajax({
        type: 'POST',
        url: '../mail.php',
        data: {
          name: reserveFormName.val(),
          phone: reserveFormPhone.val(),
        },
        success: () => {
          $(loader).hide();
          $(reserveForm).hide();
          $('.reserve-form__thanks').show();
          console.log(err);
        },
        error: () => {
          $(loader).hide();
          $(reserveForm).hide();
          $('.reserve-form__error').show();
        },
      });
    }
  });

  //
  // popup
  //
  let popup = $('.popup');
  let popupForm = $('.popup__form');
  let toursReserveBtn = $('.tours__btn');
  let popupBtn = $('.popup__btn');
  let collageBtn = $('.tour-slider__btn');

  $(toursReserveBtn).click(() => {
    $(popup).show();
    $(popupForm).css('visibility', 'visible');
  });

  for (let i = 0; i < collageBtn.length; i++) {
    $(collageBtn[i]).click(() => {
      $(popup).css('display', 'flex');
      $(popupForm).css('visibility', 'visible');
    });
  }

  $('#popup__close-svg, #popup__close-path, .popup').click((event) => {
    if (
      event.target.id === 'popup__close-svg' ||
      event.target.id === 'popup__close-path' ||
      event.target.className === 'popup'
    ) {
      $(popup).hide();
    }
  });

  $(popupBtn).click((event) => {
    event.preventDefault();

    let popupInp = $('.popup__form input');
    let popupName = $('.popup__name');
    let popupPhone = $('.popup__phone');
    let popupCheck = $('#popupFormCheck');
    let popupFormCheck = $('.popup__check-box');
    let popupFormErr = $('.popup__check');

    for (let i = 0; i < popupInp.length; i++) {
      if (!$(popupInp[i]).val()) {
        $(popupInp[i]).css('border', '1px solid #f36c6c');
      } else if ($(popupInp[i]).val()) {
        $(popupInp[i]).css('border', '1px solid #fff');
      }
    }

    if (!popupFormCheck.prop('checked')) {
      $(popupFormErr).addClass('popup__check_error');
    } else {
      $(popupFormErr).removeClass('popup__check_error');
    }

    if (popupName.val() && popupPhone.val() && popupCheck.prop('checked')) {
      $(loader).show();
      $.ajax({
        type: 'POST',
        url: '../mail.php',
        data: {
          name: popupName.val(),
          phone: popupPhone.val(),
        },
        success: () => {
          $(loader).hide();
          $(popupForm).hide();
          $('.popup__thanks').show();
        },
        error: () => {
          $(loader).hide();
          $(popupForm).hide();
          $('.popup__error').show();
        },
      });
    }
  });

  //
  // mask
  //
  $('#formPhone, #popupPhone').mask('+7 (999) 99-99-999');
});

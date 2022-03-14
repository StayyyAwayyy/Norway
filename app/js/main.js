$(document).ready(function () {
  //
  //  wow animate
  //
  new WOW().init();

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
        breakpoint: 819,
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

  let routeCurrentItem = $('.route__menu-item_active');
  let routeMenuItem = $('.route__menu-item');
  // for (let i = 0; i < routeMenuItem.length; i++) {
  //   $(routeMenuItem[i]).click((event) => {
  //     console.log(event.target);
  //     $(routeMenuItem[i]).addClass('route__menu-item_active');
  //   });
  // }

  // $('.route__menu-item').click((event) => {
  //   if ($('.route__menu-item').hasClass('route__menu-item_active')) {
  //     $('.route__menu-item').removeClass('route__menu-item_active');
  //   } else {
  //     $(this).addClass('route__menu-item_active');
  //   }
  // });

  // $('.tours').slick({
  //   vertical: true,
  //   verticalSwiping: true,
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   arrows: false,
  // });

  // $('#d1').click(() => {
  //   // $($('.tours__item')[1]).addClass('slick-active');
  //   $(tours__item[2]).addClass('slick-active');
  // });
  let toursItems = $('.tours__item');
  let toursBtn = $('.route__menu-item');
  for (let i = 0; i < toursItems.length; i++) {
    $($(toursBtn)[i]).click(() => {
      $(toursItems).hide();
      $(toursBtn).removeClass('route__menu-item_active');
      $($(toursItems)[i]).show();
      $($(toursBtn)[i]).addClass('route__menu-item_active');
    });
  }
  // for (let i = 0; i < toursBtn.length; i++) {
  //   $($(toursBtn)[i]).click(() => {});
  // }

  $('.tour-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    responsive: [
      {
        breakpoint: 1159,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        // breakpoint: 809,
        // settings: {
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        // },
      },
    ],
  });

  // review slider

  let reviewSlider = $('.review-slider');
  let reviewCurrent = $('.review__pages-current');
  let reviewCount = $('.review__pages-count');
  let slickActiveReview = $('.review-slider .slick-active');

  $(reviewSlider).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    // $(reviewCurrent).text(currentSlide / 2 + 1);
    // $(reviewCount).text(' / ' + slick.slideCount);
    if ($(window).width() > '1159') {
      $(reviewCurrent).text(slick.currentSlide / 2 + 1 + ' ');
      $(reviewCount).text(' / ' + slick.slideCount / 2);
    } else {
      $(reviewCurrent).text(slick.currentSlide / 1 + 1 + ' ');
      $(reviewCount).text(' / ' + slick.slideCount / 1);
    }
  });

  $(reviewSlider).slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1159,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
        // breakpoint: 809,
        // settings: {
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        // },
      },
    ],
  });

  // read more

  let readMoreBtn = $('.review-slider__more');

  for (let i = 0; i < readMoreBtn.length; i++) {
    $(readMoreBtn[i]).click(() => {
      let dots = $('.review-slider__dots');
      let hiddenText = $('.review-slider__hidden');

      if ($(dots[i]).css('display') === 'none') {
        $(dots[i]).show();
        $(readMoreBtn[i]).text('Читать больше');
        $(readMoreBtn[i]).css('margin-top', '30px');
        $(hiddenText[i]).hide();
      } else {
        $(dots[i]).hide();
        $(readMoreBtn[i]).text('Читать меньше');
        $(readMoreBtn[i]).css('margin-top', '5px');
        $(hiddenText[i]).show();
      }
    });
  }

  // suite

  let suiteMore = $('.suite__more');
  let suiteLess = $('.suite__less');
  suiteMore.click(() => {
    $('.suite__item:nth-child(n + 3)').css('display', 'flex');
    suiteMore.hide();
    suiteLess.show();
  });
  suiteLess.click(() => {
    $('.suite__item:nth-child(n + 3)').css('display', 'none');
    suiteMore.show();
    suiteLess.hide();
  });

  // accordion

  $($('.accordion__content')[0]).css('display', 'block');

  $('.active__item .accordion__content').slideDown();

  $('.accordion__title').on('click', function () {
    $('.accordion__content').not($(this).next()).slideUp(299);
    $('.accordion__item').removeClass('accordion__item_active');
    $(this).next().slideDown(299).parent().addClass('accordion__item_active');
  });

  // map

  let btnMap = $('.adresses__btn');
  let btnMinsk = $('.adresses__btn_minsk');
  let btnOslo = $('.adresses__btn_oslo');
  let btnToggle = $('.adresses__toggle');

  // $(btnMap).click(() => {
  //   $(btnToggle).css('animation', 'none');
  // });

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

  // form

  let reserveFormBtn = $('.reserve-form__btn');
  let reserveFormAgree = $('.reserve-form__check-agree');
  let loader = $('.loader');

  $(reserveFormBtn).click((event) => {
    let reserveForm = $('.reserve-form__form');
    let reserveFormInp = $('.reserve-form input');
    let reserveFormName = $('.reserve-form__name');
    let reserveFormPhone = $('.reserve-form__phone');
    let reserveFormCheck = $('#formCheck');
    let reserveAgreeErr = $('.reserve-form__agree-error');

    for (let i = 0; i < reserveFormInp.length; i++) {
      if (!$(reserveFormInp[i]).val()) {
        $(reserveFormInp[i]).css('border', '1px solid #f36c6c');
        event.preventDefault();
      } else if ($(reserveFormInp[i]).val()) {
        $(reserveFormInp[i]).css('border', '1px solid #fff');
        event.preventDefault();
      }
    }

    if (!reserveFormCheck.prop('checked')) {
      $(reserveAgreeErr).show();
      event.preventDefault();
    } else {
      $(reserveAgreeErr).hide();
    }

    if (reserveFormName.val() && reserveFormPhone.val() && reserveFormCheck.prop('checked')) {
      $(loader).show();
      $.ajax({
        type: 'POST',
        url: '../mail.php',
        // data: 'name=' + reserveFormName.val() + '&phone' + reserveFormPhone.val(),
        data: {
          name: reserveFormName.val(),
          phone: reserveFormPhone.val(),
        },
        success: () => {
          $(loader).hide();
          $(reserveForm).hide();
          $('.reserve-form__thanks').show();
        },
        error: () => {
          $(loader).hide();
          $(reserveForm).hide();
          $('.reserve-form__error').show();
        },
      });
    }
  });

  // popup

  let popUp = $('.popup');
  let popUpForm = $('.popup__form');
  let toursReserveBtn = $('.tours__btn');

  $(toursReserveBtn).click(() => {
    $(popUp).css('display', 'flex');
    $(popUpForm).css('visibility', 'visible');
  });

  $('#popup__close-svg, #popup__close-path, .popup').click((event) => {
    if (
      event.target.id === 'popup__close-svg' ||
      event.target.id === 'popup__close-path' ||
      event.target.className === 'popup'
    ) {
      $(popUp).hide();
    }
  });

  // $(document).click((e) => {
  //   if (!$(e.target).closest(popUp).length) {
  //     $(popUp).hide();
  //   }
  // });
});

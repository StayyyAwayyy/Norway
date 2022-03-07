$(document).ready(function () {
  // wow animate
  new WOW().init();

  // team slider
  let teamSlider = $('.our-team');
  let teamCurrent = $('.team__pages-current');
  let teamCount = $('.team__pages-count');
  let teamItems = $('.our-team__item');
  let teamHideInfo = $('.our-team__info');
  let teamArrows = $('.our-team .slick-arrow');
  let teamArrowUp = $('.our-team__arrow-up');
  let teamArrowDown = $('.our-team__arrow-down');

  $(teamSlider).slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
    // focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // centerMode: true,
    // centerPadding: '60px',
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       dots: true,
    //     },
    //   },
    // ],
  });

  // let slickItem = $('.slick-slide');
  // $('.our-team').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   $('.team__pages-span').text(currentSlide / 3 + 1);
  // });

  $(teamSlider).on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(teamCurrent).text(currentSlide / 3 + 1);
    $(teamCount).text(' / ' + slick.slideCount / 3);
  });

  //
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

  // route

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
    variableWidth: true,
  });

  // review slider

  let reviewSlider = $('.review-slider');
  let reviewCurrent = $('.review__pages-current');
  let reviewCount = $('.review__pages-count');
  let slickActiveReview = $('.review-slider .slick-active');

  $(reviewSlider).slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
  });

  $(reviewSlider).on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(reviewCurrent).text(currentSlide / 2 + 1);
    $(reviewCount).text(' / ' + slick.slideCount);
  });

  $(reviewSlider).on('init', function (event, slick) {
    // $(reviewSlider).append(sliderCounter);
    // updateSliderCounter(slick);
    $(reviewCurrent).text(currentSlide / 2 + 1);
    $(reviewCount).text(' / ' + slick.slideCount);
  });

  // read more

  let readMore = $('.review-slider__more');
  readMore.click(() => {
    readMore.hide();
    $('.review-slider__text').css('height', '173px');
  });

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

  $(reserveFormBtn).click((event) => {
    let reserveForm = $('.reserve-form');
    let reserveFormInp = $('.reserve-form input');
    let reserveFormName = $('.reserve-form__name');
    let reserveFormPhone = $('.reserve-form__phone');
    let reserveFormCheck = $('#formCheck');

    for (let i = 0; i < reserveFormInp.length; i++) {
      if (!$(reserveFormInp[i]).val()) {
        $(reserveFormInp[i]).css('border', '1px solid red');
        event.preventDefault();
      } else if ($(reserveFormInp[i]).val()) {
        $(reserveFormInp[i]).css('border', '1px solid #fff');
        event.preventDefault();
      }
    }

    if (reserveFormName.val() && reserveFormPhone.val() && reserveFormCheck.prop('checked')) {
      $.ajax({
        type: 'POST',
        url: '../mail.php',
        data: 'name=' + reserveFormName.val() + '&phone' + reserveFormPhone.val(),
        success: () => {
          $(reserveForm).hide();
          $('.reserve-form__thanks').show();
        },
        error: () => {
          $(reserveForm).hide();
          $('.reserve-form__error').show();
        },
      });
    } else {
    }
  });
});

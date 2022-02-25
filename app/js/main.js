$(document).ready(function () {
  // team info

  let teamItems = $('.our-team__item');
  for (let i = 0; i < teamItems.length; i++) {
    let teamHideInfo = $('.our-team__info');
    let arrowUp = $('.our-team__arrow-up');
    let arrowDown = $('.our-team__arrow-down');
    $(arrowUp[i]).click(() => {
      $(teamHideInfo[i]).css('transform', 'translate(0, -100%)');
      $(arrowUp[i]).hide();
      $(arrowDown[i]).show();
    });
    $(arrowDown[i]).click(() => {
      $(teamHideInfo[i]).css('transform', 'translate(0, -90px)');
      $(arrowDown[i]).hide();
      $(arrowUp[i]).show();
    });
  }

  // team slider

  $('.our-team').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
    focusOnSelect: true,
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

  let slickItem = $('.slick-slide');
  $('.our-team').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    // $('.team__pages-span').text(currentSlide + 1 + ' ');
    $('.team__pages-span').text(currentSlide + 2 - 3 + ' ');
  });

  // route

  // let mixer = mixitup('.tours');

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
});

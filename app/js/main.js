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

  //team slider

  $('.our-team').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
    // dots: true,
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
});
